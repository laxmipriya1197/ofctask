const express=require("express");
const path=require("path");
const connectDatabase=require("./config/connectDatabase");
const userRoutes=require("./routes/userRoutes");
const app=express();
const cors=require("cors");
app.use(cors());
const dotenv=require("dotenv");
dotenv.config({path:path.join(__dirname,"config","config.env")});
connectDatabase();
app.use(express.json());
app.use("/api", userRoutes);

const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
module.exports=app;
