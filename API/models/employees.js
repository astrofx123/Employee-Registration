const mongoose =require('mongoose')
const Schema = mongoose.Schema;

const EmployeeSchema= new Schema(
    {
        firstname:String,
        lastname:String,
        age:Number,
        dateofjoin:{
            type: Date,
            default: new Date()
        },
        title:String,
        department:String,
        employeetype:String,
        curentstatus:Number,
    }
);

const Employee =mongoose.model('Employee', EmployeeSchema,"employees");
module.exports=Employee;