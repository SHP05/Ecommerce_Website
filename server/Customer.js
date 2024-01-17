const mongoose = require('mongoose')
const validator = require('validator')

const CustomerSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        validate: {
            validator: validator.isEmail
        }
    },
    password:{
        type: String,
    },
    Date:{
        type: Date,
        default:Date.now        
    }
})

const CustomerModel = mongoose.model("Customer",CustomerSchema)
module.exports = CustomerModel;