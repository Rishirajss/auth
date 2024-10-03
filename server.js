const express = require("express");
const connectDb = require("./connection/db");
const userRoute = require("./routes/userroute");

// const dotenv = require("dotenv");

const app = express();
const port = 8000;

app.use(express.json());

app.use("/api/auth", userRoute);
app.use("/api/auth", userRoute);

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`connection stablish ${port}`);
  });
});
