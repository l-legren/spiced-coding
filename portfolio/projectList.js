const fs = require("fs");

const projectList = () => {
    // get a list of all your projects that are inside your projects folder (you'll get an array of names) - use readdirSync
    const myDir = `${__dirname}/projects`;
    const filesSync = fs.readdirSync(myDir, { withFileTypes: true });
    // loop through your list and create a string of html and a link for each item in the directory
    var htmlString = "";
    for (let i = 0; i < filesSync.length; i++) {
        htmlString += `<a href="/${filesSync[i].name}">${filesSync[i].name}</a><br>`;
    }
    // make sure you RETURN the completed html string
    return htmlString;
};

module.exports.projectList = projectList;

// console.log(projectList());