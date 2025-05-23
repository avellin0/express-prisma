import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.raw({ type: "application/vnd.custom-type" }));
app.use(express.text({ type: "text/html" }));

app.get("/artists", async (req, res) => {
  const todos = await prisma.artist.findMany();

  res.json(todos);
});

app.post("/artist", async (req, res) => {
  const { name } = req.body;

  const todo = await prisma.artist.create({
    data: {
      name,
    },
  });

  return res.json(todo);
});

app.get("/todos/:id", async (req, res) => {
  const id = req.params.id;
  const todo = await prisma.artist.findUnique({
    where: { id },
  });

  return res.json(todo);
});

app.get("/", async (req, res) => {
  res.send(
    `
  <h1>Hello world!</h1>
  <h2>Tranquilidade seus peida jontex?</h2>
  <p>Sejam muito bem vindos ao meu canto</p>
  <img src="../assets/fotinha.jpg">
  `.trim()
  );
});

app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
