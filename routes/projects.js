const express = require("express");

//calls the Router class, renders the index file and exports router for usage on app.js
const router = express.Router();
const { projects } = require("../data.json"); //ES6 for "const projects = require("/..data.json").projects"

router.get("/:id", (req, res) => {
    const project = projects.filter(projects => projects.id === req.params.id);
    res.render("project", project[0]);
});

module.exports = router;