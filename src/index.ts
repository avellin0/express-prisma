import express from "express";
import route from "./router/routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static("assets"));
app.use(route)


app.listen(Number(port), "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
