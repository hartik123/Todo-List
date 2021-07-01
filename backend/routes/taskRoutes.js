const express=require('express');
const router=express.Router();
const Tasks=require('../models/taskSchema');

router.get('/',async (req,res)=>{
    try {
        const tasks=await Tasks.find({});
        console.log('sending Tasks')
        res.json(tasks);
        
    } catch (e) {
        console.log(e.message);
        res.status(500).send('Internal server error')
    }
})

router.post('/',async (req,res)=>{
    try {
        const {text}=req.body;
        let task=new Tasks({
            text
        })
        await task.save();
        res.json(task);
    } catch (e) {
        console.log(e.message)
        res.status(500).send('Internal server error')
    }
})

router.put('/:id',async (req,res)=>{
    try {
        const id=req.params.id;
        const {text}=req.body;
        const task=await Tasks.findByIdAndUpdate(id,{text},{new:true})
        res.json(task);
    } catch (e) {
        console.log(e.message)
        res.status(500).send('Internal server error')
    }
})

router.delete('/:id',async (req,res)=>{
    try {
        const id=req.params.id;
        console.log(id)
        const task=await Tasks.findByIdAndDelete(id)
        res.json(task)
        
    } catch (e) {
        console.log(e.message)
        res.status(500).send('Internal server error')
    }
})

module.exports=router;