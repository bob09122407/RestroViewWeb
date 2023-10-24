const app=require("./app");
const connectDatabase=require("./config/database");

//handle exception
process.on("uncaughtException",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to uncaught exception`);
    process.exit(1);
})
// Configuration
if (process.env.NODE_ENV !== "PRODUCTION") {
    require("dotenv").config({ path: "./config/config.env" });
  }

  //connect to database
  connectDatabase();

  const server=app.listen(process.env.PORT,()=>{
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });


  process.on("unhandledRejection",(err)=>{

    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to unhandled promise rejection");
    
    server.close(()=>{
        process.exit(1);
      });
  });
 