const express = require('express');
const config = require('./config/db');
const userRoutes = require("./routes/users/usersRoutes");
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});