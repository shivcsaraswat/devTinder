const express = require("express");

// Creating an instance of express.js application 
const app = express();


// Request handlers

    //  1. "/"
        // with out $ localhost:7777/ and localhost:7777/test and localhost:7777/hello all map to the same url 
        app.use("/$", (req, res) => { 
            res.send("Hello World at localhost:7777/");
        })
    
        app.use("/test$", (req, res) => {
            res.send("Hello World at localhost:7777/test$");
    
        })
        
    
        // 2. "/test"
        app.use("/test", (req, res) => {
            res.send("Hello World at localhost:7777/test");

        })

    // Ouptut 
    //      localhost:7777/test/123 -> "Hello World at localhost:7777/test"
    //      localhost:7777/test     -> "Hellow World at localhost:7777/test"
    //      localhost:7777/test123  -> Cannot GET /test123

    
    app.use("/test/123", (req, res) => {
        res.send("Hello World at localhost:7777/test/123");

    })

  
    //3 . "/hello"
    app.use("/hello", (req, res) => { 
        res.send("Hellp World at localhost:7777/hello");
    })
    

// Web Server listening at port 7777
app.listen(7777, () => {
    console.log("Sever listening at port 7777")
});

