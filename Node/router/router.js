const express = require("express");
const users = express.Router();

const UserController = require('../controllers/user.controller')

users.post("/register", UserController.register)

users.get("/get/:id", UserController.get_user)

users.get("/getall", UserController.get_all)

users.delete("/delete/:id", UserController.deleteOne)

users.put("/update/:id", UserController.update)


module.exports = users;