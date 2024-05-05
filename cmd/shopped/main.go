package main

import (
	"fmt"

	"github.com/OpenLab-dev/shopped/internal/shopped"
)

func main() {
	port := 3000
	app := shopped.NewServerShopped()

	app.RegisterShoppedRoutes()
	err := app.Listen(fmt.Sprintf(":%d", port))

	if err != nil {
		panic(fmt.Sprintf("cannot start server: %s", err))
	}
}
