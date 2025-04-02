const USER = require("../../models/userModel.js")
const sendMail = require("../../helper/nodemailer.js")

async function createAccount(req,res){
    
    const {name,email,password,dob}  = req.body

   if((email && password) && (name && dob)){

        if(email && String(email).endsWith("@gmail.com")){
            
            try{

                const userCheck = await USER.find({email})

                // console.log(userCheck)

                if(userCheck.length >=  1){
                    console.log(userCheck.length)
                    res.json({
                        msg:"Email address is already associated with another account.",
                        success:false,
                        reason:"account-check",
                        data:userCheck
                    })

                }else{
                    const result = await USER.create({
                        name:String(name).trim(),
                        email:email,
                        password:password,
                        dob:dob
                    })
    
                    // console.log(result)

                    sendMail(email,"https://web-builder-skysync.vercel.app/auth/account-verification/"+result._id)

                    
                        res.json({
                            msg:"Account verification link has ben successfully sent to your email address.",
                            success:true
                        })

                   
                    
                }

               

            }catch(err){

                console.log(err.message)

                res.json({
                    msg:"Error while creating user account.",
                    error:err.message,
                    success:false
                })

            }

        }else{
            res.send({
                msg:"Invalid email address.",
                success:false
            })
        }

   }else{

        if(!email){
            res.json({
                msg:"Email address field is required.",
                reason:"no-email",
                success:false
            })
        }else if(!name){
            res.json({
                msg:"Name field is required.",
                reason:"no-password",
                success:false
            })
        }else if(!dob){
            res.json({
                msg:"Date of birth field is required.",
                reason:"no-password",
                success:false
            })
        }
        else{
            res.json({
                msg:"Password field is required.",
                reason:"no-password",
                success:false
            })

        }

   }

    
}



module.exports  = createAccount