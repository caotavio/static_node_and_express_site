const express = require("express");

//calls the Router class, renders the index file and exports router for usage on app.js
const router = express.Router();

router.get("/", (req, res) => {
    res.render("about");
});

module.exports = router;