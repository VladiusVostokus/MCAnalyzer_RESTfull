'use strict';

const http = require('http');

const express = require('express');
const app = express();

app.use((req, res) => {
    res.status(200).json(
        "My serveraaaaaaaa"
    );
});

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(PORT, () => {
    console.log("Запущено на порті 3000");
});



