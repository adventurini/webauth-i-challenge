const express = require("express");
const auth = require("./modules/auth");
const users = require("./modules/users");

const server = express();

server.use(express.json());

server.use("/api", auth);
server.use("/api/users", users);

server.get("/", (req, res) => {
  res.send(`<h1>Hello World!</h1>`);
});

module.exports = server;
