package authrouter

import (
	"toddle-auth/api/controllers/authcontroller"

	"github.com/gofiber/fiber/v2"
)

func ApplyRoutes(r fiber.Router) {
	auth := r.Group("/auth")

	auth.Post("/signup", authcontroller.Signup)
	auth.Post("/signin", authcontroller.Signin)
}
