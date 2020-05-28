var nodemailer = require('nodemailer');


const sendMail = (Email,subject,text)=>
{
    console.log(Email+'check')
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.Gmail,
    pass: process.env.GPassword
  }
});

var mailOptions = {
  from: process.env.Gmail,
  to: Email,
  subject: subject,
  text: text
 
};



transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}

module.exports =sendMail;