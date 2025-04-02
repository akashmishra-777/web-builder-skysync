require("dotenv").config();
const express = require('express');
const app = express();
const dbConnectionReference = require('./db/dbConnection.js');
const mainRouter = require('./routes/mainRoute.js');
const authRouter = require("./routes/authRoute.js")


app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', mainRouter);
app.use("/auth",authRouter)




app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT : ${process.env.PORT}`);
})