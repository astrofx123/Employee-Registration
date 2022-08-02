require('./models/db');
const Employee = require('./models/employee')
const Counter = require('./models/counters')

setTimeout(() => {
    //Write data to DB
    const initialemployee = [
        {firstname:"Abhishek",lastname:"Shukla",age:23,dateofjoin:new Date('2022-11-10'),
        title:"Director",department:"IT",employeetype:"FullTime",curentstatus:1},
    
        {firstname:"John",lastname:"Snow",age:33,dateofjoin:new Date('2020-11-21'),
        title:"Manager",department:"VP",employeetype:"PartTime",curentstatus:1}
    ];
    
    async function insertCounter() {
        Counter.remove({name: "employees"});

        await Counter.create({
            name: "employees",
            current: 0
        })
        .then(counter => {
            console.log(counter)
        })
        .catch(error=>{
            res.json(error)
        }) 
    }
    insertCounter();

    
}, 2000);

