const express = require('express');
const app = express();
const mongoose = require('mongoose');
const blog = require('./modals/blog')
mongoose.connect('mongodb://hidayat:hidayatone@cluster0-shard-00-00.13luq.mongodb.net:27017,cluster0-shard-00-01.13luq.mongodb.net:27017,cluster0-shard-00-02.13luq.mongodb.net:27017/node-codes?ssl=true&replicaSet=atlas-cfylp6-shard-0&authSource=admin&retryWrites=true&w=majority'
 ,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    useCreateIndex: true
 
}

);
const data = new blog({
   title:'this is first title',
   snippet:'this is my snippet',
   body:'this is its body'
});
const details = new blog ({
   Email:'',
   Password:''
})
details.save()
.then((result)=>{
   console.log(result)
})
.catch(err=>console.log(err))



data.save()
.then((result)=>{
   console.log(result)
})
.catch(err=>console.log(err))

app.listen(3000)
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
   res.render('video');
});