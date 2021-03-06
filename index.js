//import
const { destinations } = require("./db");

//imports what "express" exports
const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

//use ||
// if(process.env.PORT !== undefined){
//     PORT = process.env.PORT
// }
//create an express server (deaf)
const server = express();

server.use(cors());
//Make the server listen
server.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

//Endpoints(Routes) are made up of the method and the path
// GET/
server.get("/", (req, res) => {
  res.send(destinations);
});
