package shopped

import (
	"github.com/OpenLab-dev/shopped/internal/db"
	"github.com/gofiber/fiber/v2"
)

type FiberServer struct {
	*fiber.App
	db db.Service
}

func NewServerShopped() *FiberServer {
	server := &FiberServer{
		App: fiber.New(fiber.Config{
			ServerHeader: "Shopped",
			AppName:      "Shopped",
		}),
		db: db.New(),
	}

	return server
}
