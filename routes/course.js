const { Router } = require("express");
const courseRouter = Router();


courseRouter.post("/purchase", function(req , res){
    // expect the user to pay you money (not today) 
    res.json({
        message: "purchasing course"
    })
})

courseRouter.get("/preview", function(req , res){
    res.json({
        message: "all courses"
    })
})

module.exports ={
    courseRouter: courseRouter
}
