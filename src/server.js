const express = require("express");

// Creating an instance of express.js application 
const app = express();


// Request handlers

    //  1. "/"
        // with out $ localhost:7777/ and localhost:7777/test and localhost:7777/hello all map to the same url 
        app.use("/$", (req, res) => { 
            res.send("Hello World at localhost:7777/");
        })
    
    
        // 2. "/test"
    app.use("/test", (req, res) => {
        res.send("Hello World at localhost:7777/test");

    })
    
    //3 . "/hello"
    app.use("/hello", (req, res) => { 
        res.send("Hellp World at localhost:7777/hello");
    })

// Web Server listening at port 7777
app.listen(7777, () => {
    console.log("Sever listening at port 7777")
});

