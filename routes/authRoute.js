const express = require("express")
const router = express.Router()
const createAccount = require("../controllers/auth/registerAccount.js")
const verifyUserAccount  = require("../controllers/auth/accountVerification.js")
const loginUser = require("../controllers/auth/loginController.js")
const {ForgetPasswordEmailSender,PasswordResetter } = require("../controllers/auth/forgetPassword.js")


router.post("/register",createAccount)

router.get("/account-verification/:id",verifyUserAccount)

router.post("/forget-password",ForgetPasswordEmailSender)

router.post("/login",loginUser)

router.post("/reset-password",PasswordResetter)


module.exports = router