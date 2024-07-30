/*
 *Title: Uptime monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Atikur Rahaman Ahad
 * Date: 7/30/2024
 */

// dependecies

const http = require("http");

//app object - scaffolding
const app = {};
//configaration
app.config = {
  port: 3001,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`Listening to server on port: ${app.config.port}`);
  });
};

// handle request response

app.handleReqRes = (req, res) => {
  //response handle
  res.end("Hello Node Js!");
};


// start the server
app.createServer();