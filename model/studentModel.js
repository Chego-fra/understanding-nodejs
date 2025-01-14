const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema ({
    firstname: {
        type: String,
        required: [true, 'Firstname Required']
    },
    lastname: {
        type: String,
        required: [true, 'Lastname is required']
    },
    gender: {
        type: String
    }
});
const student = mongoose.model('student', studentSchema);
module.exports= student;