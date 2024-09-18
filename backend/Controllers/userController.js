const otpGenerator = require('otp-generator');
const twilio = require('twilio');
const userModel = require('../Models/OtpModel');

const accountSID = process.env.TWILIO_ACCOUNT_SID;
const accountToken = process.env.TWILIO_AUTH_TOKEN;

const twilioClient = new twilio(accountSID,accountToken);


const sendOtp = async(req,res) =>{
    try {
        const {phoneNumber} = req.body;
        const otp = otpGenerator.generate(6,{upperCaseAlphabets:false,lowerCaseAlphabets:false,specialChars:false});

        const cdate = new Date();
        await userModel.findOneAndUpdate(
            {phoneNumber},
            {otp,otpExpire: new Date(cdate.getTime())},
            {upsert:true, new: true, setDefaultsOnInsert:true}
        )

        await twilioClient.messages.create({
            body: `Your OTP is ${otp}`,
            to:phoneNumber,
            from:process.env.TWILIO_MOBILE_NUMBER
        });

        return res.status(200).json({ success: true, message: "Otp sent successfully" });
    } catch (error) {
        console.log(error.message);
        return res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = {
    sendOtp,
}