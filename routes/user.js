const express = require("express");
const Router = express.Router;
// const { Router } = require("express"); 

const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "asd123"

const userRouter = Router();

userRouter.post("/login", async function(req , res){
    const {email , password , firstName , lastName} = req.body;
    // TODO: add zod validation and hash the password so that plaintext password is not stored in the DB
    try{
        await userModel.create({
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

userRouter.post("/signin", async function(req , res){
    const { email , password } = req.body;

    // TODO: ideally password should be hashed and hence u can't compare user provided password and DB password 
    const user = await userModel.findOne({
        //returns either the user or undefined
        email,
        password
    });
    if(user){
        const token = jwt.sign({
            id:user._id
        }, JWT_USER_PASSWORD);

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

userRouter.get("/purchases", function(req , res){
    res.json({
        message: "purchased course"
    })
})

module.exports ={
    userRouter: userRouter
}