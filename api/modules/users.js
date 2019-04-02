const express = require('express');
const db = require('../../db/dbConfig');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/', checkAuth, async(req, res)=> {
    try {
        const users = await db('auth');

        res.status(200).json(users);

    }
    catch(error){
        res.status(500).json(error)
    }
})

async function checkAuth(req, res, next){
    const {username, password} = req.headers;
}

try{
    const user = await db('auth')
        .where({username})
        .first();

    if(user && bcrypt.compareSync(password, user.password)){
        next()
    }
    else{
        res.status(401).json({message: "You are not authorized"})
    }
}
catch(error){
    res.status(500).json(error)
}


module.exports = router

