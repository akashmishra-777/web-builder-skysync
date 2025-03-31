const express = require('express');
const router = express.Router();
const axios = require("axios")



router.get("/",async (req,res)=>{
    let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
    res.json({ ip });
})









module.exports = router;