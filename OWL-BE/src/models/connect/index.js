const mongoose = require("mongoose");
async function connect() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect successfully");
  } catch (error) {
    console.log(error);
    console.log("Connect failed");
  }
}

module.exports = { connect };