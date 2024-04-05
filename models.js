const mongoose= require("mongoose")

//connection
mongoose.connect("mongodb+srv://adarshinb18:1234@cluster0.1cb3g2m.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))


let mongoSchema=mongoose.Schema

const EmployeeSchema = new mongoSchema({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})
 var employeeModel=mongoose.model("empyee",EmployeeSchema)
module.exports=employeeModel
