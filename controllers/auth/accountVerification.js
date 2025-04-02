const USER = require("../../models/userModel.js")


async function verifyUserAccount(req,res){

    const id = req.params.id

    if(id){

        try{

            const userDataCheck = await USER.findById(id)
            

            if(userDataCheck){

                const result = await USER.findByIdAndUpdate(id,{isAccountVerified:true})

                if(result){
                    res.json({
                        username:result.name,
                        msg:"Account Verified successfully.",
                        success:true
                    })
                }

            }else{
                res.json({
                    msg:"User Account not found.",
                    where:"Account verification route",
                    success:false
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
            msg:"Verification id is not recieved on the server.",
            success:false
        })
    }

}


module.exports = verifyUserAccount