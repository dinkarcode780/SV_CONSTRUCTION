import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true
    },
    phone:{
        type:Number,
        trim:true
    },
    email:{
        type:String,
        
    },
    password:{
        type:String
    },
    profileImge:{
        type:String
    },
  
    userType:{
        type:String,
        enum:["Admin","User"],
        default:"User"
    }

},{timestamps:true});

const User = mongoose.model("User",userSchema);

export default User

// const createDefaultAdmin  = async()=>{

// }