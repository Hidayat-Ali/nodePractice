//const name = 'morio';
//console.log(name);
//const greet =(name)=>{
    //console.log(`hello, ${name}`);
/////}
//greet('mario');
//greet('yoshi');
//setTimeout(()=>{
   // console.log('hello jhon');
  //  clearInterval(int)
//},3000);
//const int =setInterval(() => {
    //console.log('hello master')
//}, 1000);
//console.log(__dirname);
//console.log(__filename);
//fs.writeFile('./file.txt', 'heloow baby',()=>{
   /// console.log('file was written');
//});
//const fs = require('fs');
//fs.mkdir('./assets',(err)=>{
//if(err){
   // console.log('err');
//}
//console.log('folder created')
//});


////creating server

const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) =>{
    console.log(req.url, req.method);
    res.setHeader('content-type', 'text/html');
    let path = './views/';
    switch(req.url){
        case './':
        path += 'index.html'
        break;
        case './about':
        path += 'about.html'
        break;
        default:
        path += '404.html'
        break;
    }
   fs.readFile(path, (err,data)=>{
  if (err){
      console.log(err);
      res.end();
  } else {

      res.end(data);
  }
   });
});

server.listen(3000, 'localhost',()=> {
console.log('request listening');
});



////another file app.js code
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./modals/blog');


//express app
const app = express();
const dbURI='mongodb://hidayat:hidayat%401234@cluster0-shard-00-00.13luq.mongodb.net:27017,cluster0-shard-00-01.13luq.mongodb.net:27017,cluster0-shard-00-02.13luq.mongodb.net:27017/node-codes?ssl=true&replicaSet=atlas-cfylp6-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err));
// listen for request
//register view engine
app.set('view engine', 'ejs');

//app.use((req,res,next)=>{
///console.log('new request made');
//console.log('host',req.hostname);
//console.log('path',req.path);
//console.log('method', req.method);
//next();
//});
//app.use((req,res,next)=>{
    //console.log('in the next midlewar');
    //next();
    //});
app.use(morgan('dev'));
app.get('/add-blog',(req,res)=>{
const Blog = new Blog({
    title:'new blog',
    snippet:'ndbdjjbvjdbdv',
    body:'jnjnjfnfjnfj'
});
Blog.save()
.then((result)=>{
 res.send(result)
})
.catch((err)=>{
    console.log(err);
});
})
app.get('/',(req,res)=>{

    const blogs =[
        {title:'How to learn', sinppet:'be consistent on what you are doing'},
        {title:'How to learn', sinppet:'be consistent on what you are doing'},
        {title:'How to learn', sinppet:'be consistent on what you are doing'},
    ];
    res.render('index',(req,res),{title:'Home',blogs})

});


app.get('/about', (req,res)=> {
    
    
    res.render('about',{title:'about'});
});
/nav>
    <% if (blogs.length>0){%>
    <% blogs.forEach(blog=> {%>
    <h3><%=blog.title%></h3>
    <p><%=blog.sinppet%></p>
    <%})%>
    <%}else{%>
    <p>no blog to display</p>
   <% }%>
   < %- include('./partials/footer.ejs') %>
   /////div class="container">
   <br>
   <br>
   <h1 class="text-center">mp4 to mp3 converter</h1>
   <!--form-->
<form action="/convert" method="POST" enctype="multipart/form-data"> 
<div class="form-group">
 <input type="file" class="form-control" name="file" required>
</div>
<div class="form-group">
 <button class="btn btn-block btn-danger"> convert to mp3</button>
</div>

</form>
</div>


