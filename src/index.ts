import express from "express";
import postgres from "postgres";

const sql = postgres("postgres://user:password@localhost:5432/db");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/bagshop", async (req, res) => {
  const users = await sql`
  SELECT
   * 
  FROM
   users`;
  res.send(users);
});

app.post("/bagshop/login", async (req: any, res: any) => {
  const { username, password } = req.body;

  const login = await sql`
  SELECT
    username,
    password
  FROM
    users
  WHERE
    username = ${username}
    AND password = ${password} `;

  if (login.length === 0) {
    return res.sendStatus(404);
  }

  res.sendStatus(200);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
