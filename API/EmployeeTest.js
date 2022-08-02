require('./models/db')
const Employee = require('./models/employee')

setTimeout(()=>{

}, 2000)

setTimeout(()=>{
    const initialemployee = [
        {firstname:"Abhishek",lastname:"Shukla",age:23,dateofjoin:new Date('2022-11-10'),
        title:"Director",department:"IT",employeetype:"FullTime",curentstatus:1},
    
        {firstname:"John",lastname:"Snow",age:33,dateofjoin:new Date('2011-11-21'),
        title:"Manager",department:"VP",employeetype:"PartTime",curentstatus:1}
    ];
    Employee.insertMany(initialemployee);
    Employee.findOne({id:1})
        .then(function(employees){
            console.log(employees)
        })
}, 2000)