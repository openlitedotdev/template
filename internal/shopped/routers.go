package shopped

import (
	"github.com/gofiber/fiber/v2"
)

func (s *FiberServer) RegisterShoppedRoutes() {
	s.App.Get("/", s.HelloWorldHandler)
}

func (s *FiberServer) HelloWorldHandler(c *fiber.Ctx) error {
	response := fiber.Map{
		"message": "Hello World",
	}

	return c.JSON(response)
}
