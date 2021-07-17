const mongoose =require('mongoose');
//const schema = new mongoose.Schema({
    //title:{
        //type:String,
       // required:true
    //},
    //snippet:{
       // type:String,
       // required:true
   // },
   // body:{
     //   type:String,
        //required:true
   // },
//},{timestamps:true});
const Userform = new mongoose.Schema({
    Email:{
        type:String,
        required:true,
       
    },
   
    Password:{

        type:String,
        required:true
    }
})

module.exports= mongoose.model('blog',Userform)