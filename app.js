const express=require('express');
const app=express();
const fs=require('fs')
app.get('/',(req,res)=>{
    res.status(200).send('hello app');
})
app.get('/world',(req,res)=>{
    res.status(200).send('hello world')
})
app.get('/posts',(req,res)=>{
   const read=fs.readFileSync('abc.txt' );
   const orgdata=read.toString();
    res.status(200).send(orgdata)
})
 

app.listen(8000, "127.0.0.1", () => {
  console.log("i am listing at port no 8000");
});
