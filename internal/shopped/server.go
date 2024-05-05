package shopped

import "github.com/gofiber/fiber/v2"

type FiberServer struct {
	*fiber.App
}

func NewServerShopped() *FiberServer {
	server := &FiberServer{
		App: fiber.New(fiber.Config{
			ServerHeader: "Shopped",
			AppName:      "Shopped",
		}),
	}

	return server
}
