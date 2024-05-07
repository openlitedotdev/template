package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/OpenLab-dev/shopped/internal/server"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"

	_ "github.com/joho/godotenv/autoload"
)

func main() {
	app := server.NewServerShopped()

	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:3000, https://shopped.pages.dev",
		AllowHeaders: "Origin, Content-Type, Accept",
	}))

	app.Use(logger.New(logger.Config{
		Format: "${time} ${method} ${path} - ${ip} - ${status} - ${latency}\n",
	}))

	app.RegisterShoppedRoutes()
	port, _ := strconv.Atoi(os.Getenv("PORT"))

	err := app.Listen(fmt.Sprintf(":%d", port))

	if err != nil {
		panic(fmt.Sprintf("cannot start server: %s", err))
	}
}
