const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    phoneNumber: {
        type:String,
        required:true,
    },
    otp: {
        type:String,
        required:true,
    },
    otpExpire: {
        type: Date,
        default: Date.now,
        get: (otpExpire) => otpExpire.getTime(),
        set: (otpExpire) => new Date(otpExpire)
    }

});

const userModel = mongoose.model("Users",UserSchema);
module.exports = userModel;