
// Require Express
const express = require("express");


// Create an Express.js App
const app = express();


// use of ?, *, +, () in the routes
    // ?
            app.use("/ab?c", (req, res) => {
                res.send("Hellow World /ab or /ac");
            }
        );
    // + 
            app.use("/ad+e", (req, res) => { 
                res.send("Hellow World for any amount of ds");
            }
        );
    // *
            app.use("/ae*c", (req, res) => { 
                res.send("Hellow World anything in between e and c in /aec");
            }
        );
    // ()
            app.use("/a(fc)d", (req, res) => {
                res.send("Hellow World grouping  fc within /a(fc)d");
            }
        );
    // cumulative use 
            app.use("/a(gh)*d+", (req, res) => {
                res.send("Hellow World anything between (gh) and d")
            }
        );


// use of regex /a/ , /.*fly$
        // /a/
            //     app.use(/.*b*/, (req, res) => {
            //         // /.b/ does not work for cab -- to check why?
            //             res.send("Thank you for utilizing the regex /a/");
            //     }
            // );
        // /.*fly$
                app.use(/.*fly$/, (req, res) => {
                    res.send("Thank you for utlizing the regex /.*fly$/")
                }
            );
// Reading query params in routes
            // query params
                app.use("/users$", (req, res) => {
                    res.send(req.query);
                }
            );
                 // Test Case 1 : localhost:7777/users?userid=101&passwordddd=100
                 // Response    : 
                //  {
                //     "userid": "101",
                //     "passwordddd": "100"
                //   }

            
            // Request Parameters
                app.use("/users/:userId/password/:password", (req, res) => {
                    res.send(req.params);
                }
            );


app.listen(7777, () => {
    console.log("Server listening at Port: 7777")
    }
);



