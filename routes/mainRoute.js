const express = require('express');
const router = express.Router();
const axios = require("axios")
const sendMail = require("../helper/nodemailer")



router.get("/",async (req,res)=>{

 
    let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    const geoData = await axios.get(`http://ip-api.com/json/${ip}`);
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