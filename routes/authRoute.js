const express = require("express")
const router = express.Router()
const createAccount = require("../controllers/auth/registerAccount.js")
const verifyUserAccount  = require("../controllers/auth/accountVerification.js")


router.post("/register",createAccount)


router.get("/account-verification/:id",verifyUserAccount)


module.exports = router