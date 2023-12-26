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

const getRoles = async() => {
  const [result] = await pool.query(`SELECT * FROM mcanalyzer.role;`);
  return result;
};

(async () =>{
  console.log(await getRoles());
})();


module.exports = pool;