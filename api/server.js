const express = require("express");

// const db = require("../data/dbConfig.js");

// invoke Router files 
const RouterData = require('./router-data/data-route.js');

const server = express();

// express middleware
server.use(express.json());

//Router handler
server.use('/api/accounts', RouterData);

server.get("/", (req, res) => {
    res.status(200).json({
        api: "it si running!"
    });
});



module.exports = server;