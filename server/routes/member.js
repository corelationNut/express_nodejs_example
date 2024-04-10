const express = require('express');
const memberRouters = express.Router();
const memberDB = require('../db/memberdb')

memberRouters.get('/getmember', (req, res, next) => {

    res.json({ member: 1234});

});

memberRouters.get('/members', async (req, res, next) => {
    try {
        const results = await memberDB.getAllMembers();
        res.json(results);
    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
});

memberRouters.put('/:id', async (req, res, next) => {
    
    console.log("parameter from URL: ", req.params.id);
    console.log("payload from request: ", req.body);
    console.log("new name: ", req.body.new_name);

    try {
        const results = await memberDB.updateMember(req.params.id, req.body.new_name);
        res.json(results);
    } catch(err) {
        console.error(err);
        res.sendStatus(500);
    }
});


module.exports = memberRouters;