const mongoose = require("mongoose")
const bcrypt = require("bcrypt")



const userSchema = new mongoose.Schema({

    name:{
        type:String,
        default:""
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    dob:{
        type:Date,
        default:""
    },
    isAccountVerified:{
        type:Boolean,
        default:false
    },
    myBuilds:{
        type:[],
        default:[]
    },
    
    plan:{
        type:String,
        default:"free-tier"
    },
    password:{
        type:String,
        required:true
    }

},{
    timestamps:true
})


userSchema.pre("save",async function(next){

    if(this.isModified("password")){

        try{

            const saltRounds = 10;
            const hash = await bcrypt.hash(this.password,saltRounds);
            this.password = hash
            next()

        }catch(e){
            console.log("Error while encrypting the password")
            next(e.message)
        }
    }
})




const USER = mongoose.model("user",userSchema)


module.exports = USER