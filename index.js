const express = require ("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");
// routing in express 
const app = express();
app.use(express.json());
// needed when user want send request with some json data 
// req.body is now defined and can be used 

app.use("/user" , userRouter);
app.use("/course" , courseRouter);
app.use("/admin" , adminRouter);

async function main(){
    // dotenv to put your environment variable in a seperate file  
    await mongoose.connect("mongodb+srv://rituraj7326:ejPmjI8405hgHBB6@cluster0.lis1g.mongodb.net/100xcourses-app")
    app.listen(3000);
    console.log("listening to port 3000");
}

main()