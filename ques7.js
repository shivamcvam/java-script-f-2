function genrateOtp(){
    const min=1000;
    const max=9999;
    const Otp= Math.floor(Math.random() * (max-min+1))+min;
    return Otp.toString();
}
console.log("your genrate otp :",genrateOtp());