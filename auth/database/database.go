package database

import (
	"log"
	"toddle-auth/models"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

var DB *gorm.DB

func init() {
	db, err := gorm.Open(sqlite.Open("gorm.sqlite3"), &gorm.Config{})
	if err != nil {
		log.Fatal(err.Error())
	}

	DB = db

	db.AutoMigrate(&models.User{})
}
