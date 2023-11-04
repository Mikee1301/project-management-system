const User = require("../../models/users/usersModels");
const bcrypt = require('bcryptjs');
async function createUser(req, res) {
  const { firstname, lastname, email, password, role, phone} = req.body;
  if (!role) {
    return res.status(400).json({ error: 'Role is required' });
  }
  try {
    const isExsist = await User.findOne({ email: { $regex: new RegExp(email, 'i') } });
    if (isExsist) {
      res.status(400).json({ message: 'Email is already exsist!'});
    }else{
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({ 
          firstname, 
          lastname, 
          email,
          password:hashedPassword,
          role,
          phone
      });
      await newUser.save();
      const sanitizedUser = {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        role: newUser.role,
        phone: newUser.phone,
        createdAt: newUser.createdAt
      };

      res.status(201).json({
        message: 'User created successfully',
        result: sanitizedUser
      });
    }
    
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getUserByEmail(req, res) {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email: { $regex: new RegExp(email, 'i') } });
    if (user) {
      const { password, _id,__v, ...sanitizedUser } = user.toObject();
      res.status(200).json(sanitizedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error("Error fetching user by email:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
async function getAllUsers(req, res) {
  try {
    const users = await User.find();
    const sanitizedUsers = users.map(user => {
      const { password, _id,__v, ...userDetails } = user.toObject();
      return userDetails;
    });
    res.status(200).json(sanitizedUsers);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
module.exports = {
  createUser,
  getUserByEmail,
  getAllUsers
};
