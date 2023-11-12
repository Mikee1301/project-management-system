const express = require('express');
const config = require('./config/db');
const userRoutes = require("./routes/users/usersRoutes");
const teamsRoutes = require("./routes/teams/teamsRoutes");
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", userRoutes); 
app.use("/api", teamsRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});