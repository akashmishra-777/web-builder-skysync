const express = require('express');
const router = express.Router();
const axios = require("axios")



router.get("/",async (req,res)=>{
    const geoData = await axios.get(`http://ip-api.com/json/${req.ip}`);
    const data = geoData.data

// This is the main route for the API
    res.status(200).json({
    msg: "Hello World!",
    data:data ,
    name:"Casual API",
    userRequestIp:req.ip,
    baseUri:"https://skysync.in"
    })

})









module.exports = router;