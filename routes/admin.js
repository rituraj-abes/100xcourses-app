const { Router } = require("express"); 
const adminRouter = Router();
const { adminModel } = require("../db")

const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "123asd";

adminRouter.post("/login", async function(req , res){
    const {email , password , firstName , lastName} = req.body;
    // TODO: add zod validation and hash the password so that plaintext password is not stored in the DB
    try{
        await adminModel.create({
            email,
            password,
            firstName,
            lastName
        })
    }
    catch(error){
        res.json({
            message:"login failed"
        })
    }
    res.json({
        message: "login Done"
    })
})

adminRouter.post("/signin", async function(req , res){
    const { email , password } = req.body;

    // TODO: ideally password should be hashed and hence u can't compare user provided password and DB password 
    const admin = await adminModel.findOne({
        //returns either the user or undefined
        email,
        password
    });
    if(admin){
        const token = jwt.sign({
            id:admin._id
        }, JWT_ADMIN_PASSWORD);

        //TODO : can do cookie login if u want 
        res.json({
            token: token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect credentials"
        })
    }
})

adminRouter.post("/course", function(req , res){
    res.json({
        message: "purchased course"
    })
})

adminRouter.put("/course", function(req , res){
    res.json({
        message: "purchased course"
    })
})


adminRouter.get("/course/bulk", function(req , res){
    res.json({
        message: "purchased course"
    })
})

module.exports ={
    adminRouter: adminRouter
}