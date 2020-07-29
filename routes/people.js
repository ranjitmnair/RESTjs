const express=require('express');
const router=express.Router();

const peoples=require('../models/People');
const { addListener } = require('../models/People');

router.use(express.json());

router.get('/',async(req,res)=>{
    try {
        const people=await peoples.find()
        res.json(people);
        
    } catch (err) {
        res.send('Error'+err)
    }
})

router.post('/',async(req,res)=>{
    const people=new peoples({
        name:req.body.name,
        age:req.body.age,
        sub:req.body.sub
    });
    try {
        
        const data=await people.save();
        res.json(data)

    } catch (err) {
        res.send('Error');
        
    }
});


router.get('/:id',async(req,res)=>{
    try {
        const people=await peoples.findById(req.params.id);
        res.json(people);
        
    } catch (err) {
        res.send('Error'+err)
    }
})

router.patch('/:id',async(req,res)=>{
    try {
        const people=await peoples.findById(req.params.id);
        people.sub=req.body.sub;
        const a1=await people.save()
        res.json(people);
        
    } catch (err) {
        res.send('Error'+err)
    }
})




module.exports=router;
