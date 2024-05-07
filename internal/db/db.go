package db

import (
	"context"
	"database/sql"
	"embed"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/golang-migrate/migrate/v4"
	"github.com/golang-migrate/migrate/v4/database/sqlite"
	"github.com/golang-migrate/migrate/v4/source/httpfs"
	_ "github.com/joho/godotenv/autoload"
	_ "github.com/mattn/go-sqlite3"
)

type Service interface {
	Health() map[string]string
}

type service struct {
	db *sql.DB
}

var (
	dbURL      = os.Getenv("DB_URL")
	dbInstance *service
)

//go:embed migrations
var migrations embed.FS

const schemaVersion = 1

func New() Service {
	if dbInstance != nil {
		return dbInstance
	}

	db, err := sql.Open("sqlite3", dbURL)

	if err != nil {
		log.Fatal(err)
	}

	if err := ensureSchema(db); err != nil {
		log.Fatalf("failed to ensure schema: %v", err)
	}

	dbInstance = &service{
		db: db,
	}

	return dbInstance
}

func ensureSchema(db *sql.DB) error {
	sourceInstance, err := httpfs.New(http.FS(migrations), "migrations")

	if err != nil {
		return fmt.Errorf("invalid source instance, %w", err)
	}

	targetInstance, err := sqlite.WithInstance(db, new(sqlite.Config))
	if err != nil {
		return fmt.Errorf("invalid target sqlite instance, %w", err)
	}

	m, err := migrate.NewWithInstance(
		"httpfs", sourceInstance,
		"sqlite",
		targetInstance,
	)
	if err != nil {
		return fmt.Errorf("failed to initialize migrate instance, %w", err)
	}

	err = m.Migrate(schemaVersion)
	if err != nil && err != migrate.ErrNoChange {
		return err
	}

	return sourceInstance.Close()
}

func (s *service) Health() map[string]string {
	ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	defer cancel()

	err := s.db.PingContext(ctx)
	if err != nil {
		log.Fatalf(fmt.Sprintf("db down: %v", err))
	}

	return map[string]string{
		"message": "It's healthy",
	}
}
