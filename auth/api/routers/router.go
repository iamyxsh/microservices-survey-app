package routers

import (
	"toddle-auth/api/routers/authrouter"

	"github.com/gofiber/fiber/v2"
)

func ApplyRoutes(a *fiber.App) {
	api := a.Group("/api")

	authrouter.ApplyRoutes(api)
}
