package main

import (
	"fmt"
	"os"
	"strconv"

	"github.com/OpenLab-dev/shopped/internal/shopped"
	_ "github.com/joho/godotenv/autoload"
)

func main() {

	app := shopped.NewServerShopped()

	app.RegisterShoppedRoutes()
	port, _ := strconv.Atoi(os.Getenv("PORT"))
	err := app.Listen(fmt.Sprintf(":%d", port))

	if err != nil {
		panic(fmt.Sprintf("cannot start server: %s", err))
	}
}
