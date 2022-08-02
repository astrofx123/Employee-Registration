const express = require("express")
const { ApolloServer, UserInputError } = require('apollo-server-express');
const fs = require('fs');
require('./models/db')
const Employee = require('./models/employees')
require('dotenv').config();
const dateScalar = require('./graphql_type')
const about = require('./about')
const Counter = require('./models/counters');

var port = process.env.PORT || '8000';

const resolvers = {
    Date: dateScalar,
    Query: {
        about: () => aboutMessage,
        employeeDirectory
    },
    Mutation: {
        setAboutMessage,
        employeeCreate,
        updateEmployee,
        SingleEmployee,
        deleteEmployee
    },
};
async function employeeDirectory(parent, args, context, info) {
    if(args.employeetype) {       
        const employees = await Employee.find(args)
        .exec()
        .then(employees => {            
            return employees;
        })
        .catch(error=>{
            res.json(error)
        }) 
    return employees;
    } else {        
        const employees = Employee.find({})
        .then(employees => {            
            return employees;
        })
        .catch(error=>{
            res.json(error)
        })  
        return employees;
    }
       
}

function validate(employee) {
    console.log(employee)
    const errors = [];
    if (employee.firstname.length < 3) {
        errors.push('Field "firstname" must be at least 3 characters long.')
    }
    if (employee.lastname.length < 3) {
        errors.push('Field "lastname" must be at least 3 characters long.')
    }
    console.log(errors.length)
    if (errors.length > 0) {
        throw new UserInputError('Invalid input(s)', { errors });
    }
}


async function employeeCreate(_, {employee}) {
    validate(employee);
    await Employee.create(employee)
        .then(counter => {
            console.log(counter)
        })
        .catch(error=>{
            res.json(error)
        }) 
    
    return employee;
}

function setAboutMessage(_, {message}){
    return aboutMessage = message;
}

async function SingleEmployee(_, { _id }) {
    const employee = await Employee.findById({_id})
    return employee;
}

async function updateEmployee(_, {employee}) {                          
    await Employee.findOneAndUpdate({_id: employee.id}, {
        title: employee.title,
        department: employee.department,
        curentstatus: employee.curentstatus
    }).then(employee => {
        return true;
    }).catch(error => {
        return false;
    })
}

function deleteEmployee(_,{_id})
{
    const employee = Employee.deleteOne({_id: {_id}})
        .then((employee) => {
            console.log('deleted');
        })

}



const server = new ApolloServer({
    typeDefs : fs.readFileSync('schema_graphql', 'utf8'),
    resolvers,
    formatError: error => {
        console.log(error);
        return error;
    },
});


const app = express();
server.start().then(() => {
    server.applyMiddleware({
      app,
      path: '/graphql',
      cors: true,
    });
});


app.listen(port, function(){
    console.log("API Server listening on Port # " + port);
})