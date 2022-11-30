const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");
const { seedDB } = require("./seed.js");
const {
  signUp,
  signIn,
  getPetAtt,
  addToPets,
  getFamAtt,
  addToFam,
  getFunAtt,
  addToFun,
} = require("./controller.js");

const app = express();
app.use(express.json());
app.use(cors());

const { PORT } = process.env;
const port = PORT || 4292;
app.post("/api/signup", signUp);
app.post("/api/seed", seedDB);
app.post("/api/signin", signIn);
app.post("/petbtn", addToPets);
app.post("/fambtn", addToFam);
app.post("/forfunbtn", addToFun);
app.get("/getPetAtt", getPetAtt);
app.get("/getfamAtt", getFamAtt);
app.get("/getJFfAtt", getFunAtt);

// file endPoints

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../sign-in.html"));
});

app.get("/styles", (req, res) => {
  res.sendFile(path.join(__dirname, "../sign-in.css"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../script.js"));
});

app.get("/Home", (req, res) => {
  res.sendFile(path.join(__dirname, "../Home.html"));
});
app.get("/Pets", (req, res) => {
  res.sendFile(path.join(__dirname, "../pets.html"));
});
app.get("/family", (req, res) => {
  res.sendFile(path.join(__dirname, "../family.html"));
});
app.get("/justforfun", (req, res) => {
  res.sendFile(path.join(__dirname, "../justforfun.html"));
});
app.get("/Events", (req, res) => {
  res.sendFile(path.join(__dirname, "../events.html"));
});

app.get("/styles2", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.css"));
});
app.get("/js2", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.js"));
});

app.listen(port, () => console.log(`server listening on port ${port}`));
