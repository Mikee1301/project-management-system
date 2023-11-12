const mongoose = require('mongoose');
const mongoURI =  "mongodb://localhost:27017/project_management_system";
const  connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};
console.info("Please wait connecting to database.....");
mongoose.connect(mongoURI, connectionParams)
  .then(() => {
    console.info("Successfully Connected to Database!");
  }) 
  .catch(error => {
    console.error("Error connecting to MongoDB Atlas:", error);
});
  