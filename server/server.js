
const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const DB = process.env.DB_URI;

mongoose.connect(DB).then((con) => {
  console.log("DB CONNECTION DONE :)");
});

// SERVER START :
// console.log("MODE (server.js) : ", .NODE_ENV);
const port =  5001;
app.listen(port, () => {
  console.log(`Running on port - ${port}..`);
});