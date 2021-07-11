const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
    text:{
        type:String,
        required:true
    }
})

const Tasks=mongoose.model('task',taskSchema);

module.exports=Tasks;