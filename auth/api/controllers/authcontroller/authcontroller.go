package authcontroller

import (
	"time"
	"toddle-auth/database"
	"toddle-auth/models"

	"github.com/dgrijalva/jwt-go"
	"github.com/gofiber/fiber/v2"
	"github.com/monaco-io/request"
)

func Signup(c *fiber.Ctx) error {
	body := new(models.SignupBody)

	err := c.BodyParser(body)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	user := models.User{Name: body.Name, Email: body.Email, Password: body.Password}
	op := database.DB.Create(&user)

	if op.Error != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": op.Error,
		})
	}

	client := request.Client{
		URL:    "http://event:3002",
		Method: "POST",
		JSON:   map[string]interface{}{"type": "USER_CREATED", "payload": map[string]interface{}{"id": user.ID, "email": user.Email}},
	}

	resp := client.Send()
	if resp.Error() != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": resp.Error(),
		})
	}

	return c.JSON(user)
}

func Signin(c *fiber.Ctx) error {
	body := new(models.SigninBody)

	err := c.BodyParser(body)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	user := models.User{Email: body.Email, Password: body.Password}

	op := database.DB.Where(&user).First(&user)
	if op.Error != nil {
		return c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": op.Error.Error(),
		})
	}

	claims := jwt.MapClaims{}

	claims["userid"] = user.ID
	claims["exp"] = time.Now().Add(time.Hour * 1).Unix()

	at := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	token, err := at.SignedString([]byte("mySuperSecret"))
	if err != nil {
		return c.Status(fiber.StatusBadGateway).JSON(fiber.Map{
			"error": err.Error(),
		})
	}

	return c.JSON(fiber.Map{
		"token": token,
	})
}
