'use strict';

require('dotenv').config();
const mysql = require('mysql2');

const access = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
  };

const pool = mysql.createPool(access).promise();

(async () =>{
    const result = await pool.query(`SELECT * FROM mcanalyzer.role;`);
    console.log(result);
})();
