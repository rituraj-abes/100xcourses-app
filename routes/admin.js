const { Router } = require("express"); 
const adminRouter = Router();

const { adminModel } = require("../db")

adminRouter.post("/login", function(req , res){
    res.json({
        message: "login endpoint"
    })
})

adminRouter.post("/signin", function(req , res){
    res.json({
        message: "signin endpoint"
    })
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