var nodemailer = require('nodemailer');


const sendMail = (Email,subject,text)=>
{
   
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
    
  } else {
    
  }
});
}

module.exports =sendMail;