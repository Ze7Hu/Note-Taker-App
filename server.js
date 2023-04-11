const express = require("express");

const path = require("path");
const { clog } = require("./middleware/clog");
const api = require ("./Routes");

const PORT = process.env.PORT || 3000;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", api);

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`);
});
