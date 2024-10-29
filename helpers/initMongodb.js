const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {dbName: process.env.DB_NAME})
.then((res)=>{
    console.log('Connected to MongoDB');
    
})
.catch((err)=>{
    console.log(err.message);
    
})
