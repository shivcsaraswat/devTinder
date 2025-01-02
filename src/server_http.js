// require express
const express = require("express");

// Initialize an instance of Express.js application
const app = express();


// API Route Handlers 
    // Testing app.use

        // Overrides any GET PUT POST PATCH DELETE HTTP calls because of the ordering
        //  use indicates how app.use works on any call GET PUT POST PATCH DELETE calls
        app.use("/users", (req, res) => { 
            res.send(
                "Overrides the exsiting GET PUT POST PATCH and DELETE HTTP calls"
            );
        }
    );

    // 1. GET /users
        app.get("/users", (req,res) => {
            res.send({
                "firstName" : "Shiv C",
                "lastName" : "Saraswat"
            });
        }
    );
    // 2. POST /users
        app.post("/users", (req, res) => {
            res.send(
                "POSTING users' data."
            );
        }
    );

    // 3. DELETE /users 
        app.delete("/users", (req, res) => {
            res.send(
                "Deleting users' data."
            );
        }
    );
    // 4. PATCH /users
        app.patch("/users", (req, res) => {
            res.send(
                "Patching users' data."
            );
        }
    );
   



// listen to server at Port 7777 
app.listen("7777", () => { 
     console.log(" Express Server Instance listening at Port 7777");
    }
);


