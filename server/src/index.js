import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();

app.use(morgan("tiny"));
app.use(cors());
// app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    hello: {
      name: "John Doe",
    },
  });
});

app.listen(3000, () => {
  console.log("Listening on https://localhost:3000");
});
