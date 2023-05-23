const express = require('express')
const router = express.Router()
const membershipSchema = require('../model/membershipSchema')


// creating post router, to enable us push/create data into the Mongo database
 

router.post('/registerMember', async(req, res) => {
    const data = req.body
    try {
        const member = new membershipSchema(data)  //creating new member
        await member.save()
        return res.send(member).status(200)
    }catch(error) {
        res.send(error).status(400)
    }
});

// get route fetching data that has been posted in the database
router.get('/registerMember', async(req, res) => {
    const data = req.body
    try {
        const member = await membershipSchema.find(data)
        res.status(200).send(member)
    }catch(error) {
        res.send(error).status(400)
    }
});


module.exports = router;


