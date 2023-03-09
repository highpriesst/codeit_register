const express = require("express");
const cors = require("cors");
const db = require("./models");

// import bodyParser from "body-parser";
// app.use(bodyParser.json());

const app = express();
const PORT = 3000;
const Role = db.role;

const corsOptions = {
  origin: "http://localhost:3000",
};

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });
  Role.create({
    id: 2,
    name: "admin",
  });
}

//app.use middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync the database!");
});

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

app.get("/", (req, res) => {
  res.send("Codeit Registiration/Login application.");
});

app.listen(PORT, () => {
  console.log(`🚀 Server started at the PORT:${PORT} 🚀`);
});
