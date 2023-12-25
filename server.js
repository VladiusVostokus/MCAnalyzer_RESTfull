'use strict';

const http = require('http');
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use('/userRoutes', userRoutes);

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);

/*
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
*/

server.listen(PORT, () => {
   console.log("Запущено на порті 3000");
});
