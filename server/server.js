
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB = process.env.DB_URI;

// SERVER START :
// console.log("MODE (server.js) : ", .NODE_ENV);
const port =  5001;
app.listen(port, async() => {
  await mongoose.connect(DB).then((con) => {
    console.log("DB CONNECTION DONE :)");
  });
  console.log(`Running on port - ${port}..`);
});