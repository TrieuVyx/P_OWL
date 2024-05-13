const mongoose = require("mongoose");
async function connect() {
  try {
    mongoose.set("strictQuery", false);
    // mongoose.set('useFindAndModify', false);
    await mongoose.connect(process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
        // useCreateIndex: true,
      }
    );

    console.log("Connect successfully");
  } catch (error) {


    console.log(error);
    console.log("Connect failed");
  }
}


module.exports = { connect };