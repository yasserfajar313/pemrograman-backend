// Import Express JS
const express = require("express");

// Create an Express JS instance
const app = express();

/**
 * Define a route
 * Method GET accepts two parameters:
 * 1. The route
 * 2. A callback function that accepts two parameters:
 *  - Request = req
 *  - Response = res
 */

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.put("/:id", (req, res) => {
    res
      .status(201) // Set the status code to 201
      .json({
        message: `Updating the user with id: ${req.params.id} with the data: ${req.body}`,
      }); // Send a response
  });

// Start the server
app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
