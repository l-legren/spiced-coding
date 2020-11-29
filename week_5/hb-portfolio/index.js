const express = require("express");
const app = express();
const hb = require("express-handlebars");
const projects = require("./projects.json");
// const { projectList } = require("./projectList");

// this configures express to use express-handlebars as the template engine
app.engine("handlebars", hb());
app.set("view engine", "handlebars");

// this lets us serve all of the static files that are in our projects directory!
app.use(express.static("./projects"));
app.use(express.static("./public"));

app.get("/", (req, res) => {
    res.render("welcome", {
        layout: "main", //express hb will look by default for a layout file with name main
        projects,
    });
});

app.get("/connect4", (req, res) => {
    res.sendFile(`${__dirname}/projects/connect4`);
});

app.get("/spotify_handlebars", (req, res) => {
    res.sendFile(`${__dirname}/projects/spotify_handlebars`);
});

app.get("/projects/:project", (req, res) => {
    
    const { project } = req.params;
    const selectedProject = projects.find(prj => { 
        return prj.directory == project; 
    });
    console.log(selectedProject);
    if (selectedProject) {
        res.render("description", {
            layout: "main",
            projects,
            selectedProject,
            helpers: {
                playWith(name) {
                    return `Play around with ${name}, it's great!!!`;
                } 
            }
        });
    } else {
        res.status(404);
        res.send("Page not found");
    }
});

app.listen(8080, () => console.log("hb express listening on port 8080"));