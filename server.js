const mongoose = require("mongoose");

const app = require('./app');

// const DB_HOST="mongodb+srv://1192skm:example1@cluster0.3du4pfp.mongodb.net/db_contacts"
  const { DB_HOST, PORT = 3000 } = process.env;

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
})

