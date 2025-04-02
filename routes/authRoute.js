const express = require("express")
const router = express.Router()
const createAccount = require("../controllers/auth/registerAccount.js")


router.post("/register",createAccount)


router.get("/account-verification/:id",(req,res)=>{
    res.json({msg:"Account Verified. "+req.params.id})
})


module.exports = router