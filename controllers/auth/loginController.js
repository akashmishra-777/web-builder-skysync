const USER = require("../../models/userModel");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

async function LoginController(req,res){

    const {email,password} = req.body;

    try{
        console.log("check 1")
        const userCheck = await USER.find({email})

        if(userCheck.length == 1){
            console.log("check 2")
            const userData = userCheck[0]

            if(userData.isAccountVerified == false){
                console.log("check 3")
                res.json({
                    msg:"Account is not verified.",
                    success:false,
                    reason:"account-check",
                })

            }else{
                console.log("check 4")
                const isPasswordMatch = await  bcrypt.compare(password,userData.password)
                
                console.log(isPasswordMatch)
                
                if(isPasswordMatch){
                    console.log("check 5")
                    const token = jwt.sign({id:userData._id},process.env.JWT_SECRET_KEY,{expiresIn:"7d"})

                    res.json({
                        msg:"User logged in successfully.",
                        success:true,
                        token:token,
                        user:{
                            name:userData.name,
                            email:userData.email,
                            id:userData._id
                        }
                    })
                }else{
                    res.json({
                        msg:"Password is incorrect.",
                        success:false,
                        reason:"password-check",
                    })
                }

                

            }

        }else{

            res.json({
                msg:"Email address is not associated with any account.",
                success:false,
                reason:"account-check",
            })

        }

        

    }catch(error){

        res.json({
            msg:"Error while performing operation for user login.",
            success:false,
            error:error.message
        })

    }

}


module.exports = LoginController