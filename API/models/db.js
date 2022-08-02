const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://admin:admin@cluster0.vmkju.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on("connected", function(){
    console.log("Application is connected to the database");
})