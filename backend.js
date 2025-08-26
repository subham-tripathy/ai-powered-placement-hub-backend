const cors = require("cors");
const express = require("express");
const app = express();
const { PrismaClient } = require("@prisma/client");
const { signup, login } = require("./backend_functions");
const prisma = new PrismaClient();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("Hello, The Node JS Server is running like a F1 Race Car 🏎️");
});

app.get("/allUsers", async (req, res) => {
  res.json(await prisma.users.findMany());
});

app.post("/signup", async (req, res) => {
  const { id, name, email, pw } = req.body;
  const result = await signup(id, name, email, pw);
  res.json(result);
});

app.post("/login", async (req, res) => {
  const { id, pw } = req.body;
  const result = await login(id, pw);
  res.json(result);
});

app.listen(port, () => {
  console.log("node js server is running ✅");
});
