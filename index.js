import express from "express";
const app = express();
import servers from "./servers.js";
// const cors = require('cors')

// app.use(cors())

app.set("view engine", "ejs");

app.use(express.urlencoded());
app.use(express.json());

app.use(express.static("./public/servers"));

app.get("/", (req, res) => {
  const data = servers;
  res.json(data);
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("Server Started on " + PORT);
});
