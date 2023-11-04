const express = require("express");
const router = express.Router();
const userController = require("../../controllers/users/usersController");

router.post("/user/register", userController.createUser);
router.get('/users', userController.getAllUsers);
router.get("/user", userController.getUserByEmail); 

module.exports = router;
