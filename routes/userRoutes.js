'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req,res,next) => {
    res.status(200).json({
        message:'Handling GET request to /userRouters'
    });
});

router.post('/', (req,res,next) => {
    res.status(200).json({
        message:'Handling POST request to /userRouters'
    });
});

router.get('/:userId', (req,res,next) => {
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
});

router.patch('/:userId', (req,res,next) => {
    res.status(200).json({
        message:'Update user',
    });
});

router.delete('/:userId', (req,res,next) => {
    res.status(200).json({
        message:'Delete user'
    });
});

module.exports = router;
