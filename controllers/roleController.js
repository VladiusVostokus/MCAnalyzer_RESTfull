'use strict';

const dataBase = require('../database');

const getAllRoles = (req,res) => {
    const query = 'SELECT * FROM Role';
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

const getRole = (req,res) => {
    const id = req.params.id;
    const query = `SELECT * FROM Role WHERE id = ${id}`;
    dataBase.query(query, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
};

module.exports = {getAllRoles,getRole};
