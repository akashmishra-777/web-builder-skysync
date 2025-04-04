const USER = require("../../models/userModel.js")
const sendMail = require("../../helper/nodeMailerForForgetPassword.js")
const bcrypt = require("bcrypt")


async function ForgetPasswordEmailSender(req,res){

    const {email} = req.body

    if(email && String(email).endsWith("@gmail.com")){

        try{

            const userCheck = await USER.find({email})

            if(userCheck.length ==  1){

                
                sendMail(email,"https://web-builder-skysync.vercel.app/auth/reset-password/"+userCheck[0]._id)
                

                res.json({
                    msg:"Account verification link has ben successfully sent to your email address.",
                    success:true
                })

            }else{
                res.json({
                    msg:"Email address is not associated with any account.",
                    success:false,
                    reason:"account-check",
                })
            }

        }catch(err){

            res.json({
                msg:"Error while performing operation for user account verification.",
                success:false,
                err:err.message
            })

        }

    }else{
        res.json({
            msg:"Email address is not valid.",
            success:false,
            reason:"email-check",
        })
    }

}





async function PasswordResetter(req,res){

    const {newPassword,confirmPassword,userId} = req.body

    if((newPassword && confirmPassword) && newPassword == confirmPassword){

        console.log("check 1")
        const encrypt = await bcrypt.hash(newPassword,10)

        try {
            console.log("check 2")
            const check  = await USER.findById(userId)
            
            console.log("check 3")
            console.log(check)
            if(check){
                const result = await USER.findByIdAndUpdate(userId,{password:encrypt})
                res.json({
                    msg:"Password has been successfully updated.",
                    success:true,
                })
                
            }

        } catch (error) {
            
            res.json({
            msg:"User not found.",
            success:false,
            })
        }
        


    }else{
        res.json({
            msg:"Password required fields are not found.",
            success:false,
            reason:"password-check",
        })
    }
      
}


module.exports = {
    ForgetPasswordEmailSender,
    PasswordResetter
}