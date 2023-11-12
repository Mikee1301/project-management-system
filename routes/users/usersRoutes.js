const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users/usersController");


router.get('/users', userController.getAllUsers);
router.get("/users/:email", userController.getUserByEmail); 
router.get("/users/:id", userController.getUserById); 
router.post("/users/register", userController.createUser);
router.put("/users/:id", userController.updateUserById);

module.exports = router;
