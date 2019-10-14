const express = require("express");
const data = require("./data.json");
const { projects } = data; //ES6 for projects = data.projects
const port = process.env.PORT || 3000;

const app = express(); //central part of the app - from here set set up routes and middleware

app.use("/static", express.static("public")); //serves the static files (css and such) from the 'public' folder
app.use("/images", express.static("images")); //serves the images folder, which are also static files

/*this method tells express which to use 'pug' as the template engine... in this case by default express will look for
a 'views' folder... so create the folder and put the pug files in it.*/
app.set("view engine", "pug");

//assign routes from routes folder to variables
const mainRoute = require("./routes/index");
const aboutRoute = require("./routes/about");
const projectsRoute = require("./routes/projects");

//calls the routes
app.use("/", mainRoute);
app.use("/about", aboutRoute);
app.use("/project", projectsRoute);

//catches 404 errors in a friendlier message to the user
app.use((req, res, next) => {
    const err = new Error('Sorry! Page not found');
    err.status = 404;
    next(err);
});

//handles other types of errors using error.pug
app.use((err, req, res, next) => {
    res.render('error', {
        status: err.status,
        message: err.message,
        stack: err.stack,
        error: {}
    });
});

//sets up a server listening on port 3000
app.listen(port, () => {
    console.log(`This app is runing smooth on localhost:${port}`);
});