require("dotenv").config();
const express = require('express');
const app = express();
const dbConnectionReference = require('./db/dbConnection.js');
const casualRouter = require('./routes/mainRoute.js');

app.set("trust proxy", true);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/', casualRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(process.env.PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT : ${process.env.PORT}`);
})