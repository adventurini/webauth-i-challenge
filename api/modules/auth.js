const express = require('express');
const db = require('../../db/dbConfig')
const bcrypt = require('bcrypt')

const router = express.Router();

router.post('/register', async (req, res)=> {
    const {username, password} =req.body;
    if(!username || !password){
        res.status(400).json({message: "Please enter username/password"})}
    try{
        req.body.password = bcrypt.hashSync(req.body.password, 9);
        const user = await db('auth').insert(req.body);
        res.status(200).json(user);
    }
    catch(error){
        res.status(500).json(error)
    }
})

router.post('login', async (req, res)=> {

})

module.exports = router