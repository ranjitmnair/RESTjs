const mongoose=require('mongoose');

const peopleSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    sub:{
        type:Boolean,
        required:true,
        default:false
    }
},{
    timestamps:true
});

module.exports=mongoose.model('People',peopleSchema);