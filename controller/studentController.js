const Student = require('../model/studentModel');

module.exports={


// --------------------------post students---------------------------- 
    addStudent: async (req, res, next) => {
        try{
            const student = new Student(req.body);
            const result = await student.save();
            res.send(result);
            next();
        }
        catch(error){
            console.log(error.message);
            res.status(500).send("Server Error")
        }
    },

// --------------------------get students----------------------------
    getStudent: async(req, res, next) => {
        try{
            const student = await Student.find();
            res.send(student);
            next();
        }
        catch(error){
            console.log(error.message);
            res.status(500).send("Server Error")
        }
    },

// --------------------------update students----------------------------
    putStudent: async(req, res, next) => {
        try{
            const id = req.params.id;
            const update = req.body;
            const options = {new: true};
            const updatedStudent = await Student.findByIdAndUpdate(id, update, options);
            res.send(updatedStudent);
            if (!updatedStudent) {
                return res.status(404).send("Student Not Found")
            }
            next();
        }
        catch(error){
            console.log(error.message);
            res.status(500).send("Server Error")
        }
    },

// --------------------------patch students----------------------------
    patchStudent: async (req, res, next) => {
        try{
            const id = req.params.id;
            const update = req.body;
            const options = {new: true};
            const patchedStudent = await Student.findByIdAndUpdate(id, update, options);
            res.send(patchedStudent);
            next();
        }
        catch(error){
            console.log(error.message);
            res.status(500).send("Server Error")
        }
    },


// --------------------------delete students----------------------------

    deleteStudent: async (req, res, next) => {
        try{
            const id = req.params.id;
            const student = await Student.findByIdAndDelete(id)
            res.send(student)
            next();
        }       
         catch(error){
            console.log(error.message);
            res.status(500).send("Server Error")
        }
    }



}