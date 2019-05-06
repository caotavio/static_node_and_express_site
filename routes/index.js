const express = require("express");

//calls the Router class, renders the index file and exports router for usage on app.js
const router = express.Router();
const { projects } = require("../data.json"); //ES6 for "const projects = require("/..data.json").projects"

router.get("/", (req, res) => {
    res.render("index", {projects});
});

module.exports = router;