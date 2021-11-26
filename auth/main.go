package main

import (
	"toddle-auth/api/routers"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	routers.ApplyRoutes(app)

	app.Listen(":3001")
}
