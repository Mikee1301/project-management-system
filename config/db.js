const mongoose = require('mongoose');
const mongoURI =  "mongodb+srv://admin:admin@mycluster.s4rowum.mongodb.net/project-management-system?retryWrites=true&w=majority";
const  connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  bufferCommands: true 
};
console.info("Please wait connecting to database.....");
mongoose.connect(mongoURI, connectionParams)
  .then(() => {
    console.info("Successfully Connected to Database!");
  }) 
  .catch(error => {
    console.error("Error connecting to MongoDB Atlas:", error);
});
  