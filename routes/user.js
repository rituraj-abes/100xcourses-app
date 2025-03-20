const express = require("express");
const Router = express.Router;

// const { Router } = require("express"); 
const userRouter = Router();

userRouter.post("/login", function(req , res){
    res.json({
        message: "login endpoint"
    })
})

userRouter.post("/signin", function(req , res){
    res.json({
        message: "signin endpoint"
    })
})

userRouter.get("/purchases", function(req , res){
    res.json({
        message: "purchased course"
    })
})

module.exports ={
    userRouter: userRouter
}