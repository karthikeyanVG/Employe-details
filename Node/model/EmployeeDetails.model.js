const mongoose = require('mongoose');
const validate = require('mongoose-validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        validate: [
            validate({
                validator: 'isEmail',
                message: 'Not a valid email.',
            })]
    },
    phone: {
        type: String,
        required: true,
        validate: [
            validate({
                validator: 'isNumeric',
                arguments: [7, 20],
                message: 'Not a valid phone number.',
            })]
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },


}, { timestamps: true });

module.exports = User = mongoose.model('User', userSchema);