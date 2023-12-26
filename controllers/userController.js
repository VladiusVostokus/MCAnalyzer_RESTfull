'use strict';

const Get = (req,res,next) => {
    res.status(200).json({
        message:'Handling GET request to /userRouters'
    });
};

const Create = (req,res,next) => {
    res.status(201).json({
        message:'Handling POST request to /userRouters'
    });
};

const getUser = (req,res,next) => {
    const id = req.params.userId;
    if(id === '228') {
        res.status(200).json({
            message:'2281488',
            id : id,
        });
    }
    else {
        res.status(200).json({
            message:'just ID',
        });
    }
};

const createUser = (req,res,next) => {
    res.status(201).json({
        message:'User created'
    });
};

const updateUser = (req,res,next) => {
    res.status(200).json({
        message:'Update user',
    });
};

const deleteUser = (req,res,next) => {
    res.status(200).json({
        message:'Delete user'
    });
};

module.exports = {Get, Create, getUser, createUser, updateUser, deleteUser};