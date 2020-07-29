const express=require('express');
const mongoose=require('mongoose');
const url='mongodb://localhost/RanjitTest';


const app=express()

mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});
const con=mongoose.connection;

con.on('open',()=>{
    console.log("database connected");
})

const peopleRouter=require('./routes/people');
app.use('/people',peopleRouter);


app.listen(9000,()=>{
    console.log("server started")
})