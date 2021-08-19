const axios = require('axios').default;
const dotenv = require('dotenv').config();
const express = require('express');
const http = require('http');

const app = express();



app.get('/flights', (req, res) => {

    axios.get()

});


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
