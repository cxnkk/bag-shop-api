import express from "express";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello TypeScript with Express");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
