require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Hello, The Node JS Server is running like a F1 Race Car 🏎️");
})

app.listen(port, () => {
  console.log(`node js server is running at http://localhost:${port}`)
})