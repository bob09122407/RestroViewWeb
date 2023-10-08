const express= require("express");
const app=express();
const errorMiddleware= require("./middleware/error");

app.get('*',(req,res,next)=>{
    res.status(200).json({
      message:'bad request'
    })
  })
app.use(errorMiddleware);

module.exports=app;