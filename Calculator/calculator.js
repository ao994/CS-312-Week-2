//command to use before using nodemon server.js: cmd.exe -ExecutionPolicy Unrestricted

const express = require("express");

const app = express();

//home directory
app.get("/", function(req, res){
    res.send("Hello World!");
});

//host on port 3000
app.listen(3000, function(){
    console.log("Server started on port 3000");
});
