require('dotenv').config();
require('./helpers/initMongodb')
const express = require('express');
const studentRoute =require('./route/studentRoute')
const app = express();
app.use(express.json());
app.use(studentRoute);


app.use((req, res, next)=> {
    const err = new Error("Not Found");
    err.status = 404
    next(err)
})

app.use((err, req, res, next)=>{
    res.status(err.status || 500)
    res.send({
        error:{
            status: err.status || 500,
            message: err.message
        }
    })
})



app.listen(process.env.port || 4000, function () {
    console.log('Now listening for request on: http://localhost:4000');
});

