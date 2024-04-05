// 1.importing the express
const express = require('express')
const employeeModel=require('./models')

//2
const app= new express()

//Middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())

//3.Api
app.get('/',(req,res)=>{
    res.send("Message from Server")
})

app.get('/trial',(req,res)=>{
    res.send("trial Server")
})

// api to add data to db
app.post('/add',async(req,res)=>{
    const result = await new employeeModel(req.body);
    result.save();
    res.send("data added")
  })
// api to view data from db
app.get('/view',async(req,res)=>{
    let result = await employeeModel.find();
    res.json(result);
  })






//4.Port
app.listen(4000,()=>{
    console.log('port is running at 4000');
})