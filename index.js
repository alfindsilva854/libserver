// Import .env file
require('dotenv').config();

// Import express
const express = require('express');
const cors = require('cors');
const router = require('./router/router');

// Create server using express
const server = express();
server.use(cors());

// To convert all incoming JSON data to JavaScript objects
server.use(express.json());

// Router setup
server.use(router);

// Connect to the database
require('./connections/connection');

// Port
const port = process.env.PORT || 3006;

server.listen(port, () => {
    console.log(`Server started at port number ${port}`);
});
