const express= require("express");
const app=express();
const cors = require('cors');
const errorMiddleware= require("./middleware/error");
const cookieParser= require("cookie-parser");
const bodyParser= require("body-parser");


app.use(cors({
  origin: ['http://localhost:2000'],
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.urlencoded({extended: true}));


//route imports

const user= require("./routes/userRoutes");
const restaurant= require("./routes/restaurantRoutes");
const cafes= require("./routes/cafeRoutes");
const vendors= require("./routes/vendorRoute");
const advertisement=require("./routes/advertisementRoute");
const filter=require("./routes/filterRoutes");
const openmap=require("./routes/mapRoute");
const reel = require("./routes/reelsRoutes");

//give the route to the api
app.use("/api/v1", user);
app.use("/api/v1",restaurant);
app.use("/api/v1",cafes);
app.use("/api/v1",vendors);
app.use("/api/v1", advertisement);
app.use("/api/v1", filter);
app.use("/api/v1", openmap);
app.use("/api/v1", reel);

app.get('*',(req,res,next)=>{
    res.status(200).json({
      message:'bad request'
    })
  })
app.use(errorMiddleware);

module.exports=app;