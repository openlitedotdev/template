package server

import (
	"github.com/gofiber/fiber/v2"
)

func (s *FiberServer) RegisterShoppedRoutes() {
	s.App.Get("/", s.HelloWorldHandler)
	s.App.Get("/health", s.healthHandler)
}

func (s *FiberServer) HelloWorldHandler(c *fiber.Ctx) error {
	response := fiber.Map{
		"message": "Hello World",
	}

	return c.JSON(response)
}

func (s *FiberServer) healthHandler(c *fiber.Ctx) error {
	return c.JSON(s.db.Health())
}
