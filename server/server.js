const express = require("express");
const cors = require("cors");
// import bodyParser from "body-parser";
// app.use(bodyParser.json());

const app = express();
const PORT = 3000;

const corsOptions = {
  origin: "http://localhost:3000",
};

//app.use middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Codeit Registiration/Login application.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server started at the PORT:${PORT} 🚀`);
});
