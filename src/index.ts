import express from "express";
import postgres from "postgres";

const sql = postgres("postgres://user:password@localhost:5432/db");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/bagshop", async (req, res) => {
  const bags = await sql`SELECT * FROM bags`;
  res.send(bags);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
