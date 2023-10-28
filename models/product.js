const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        lowercase:true
    },
    price:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    },
    rating:{
        type:Number,
        default:4.5
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    company:{
        type:String,
        lowercase:true,
        enum:{
            values:["apple","nokia","hp","mi","samsung","dell"],
            message:`{VALUE} is not supported`
        }
    }
})

module.exports=mongoose.model('Product',productSchema);