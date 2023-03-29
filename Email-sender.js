const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

const mailOptions = {
    from: 'youremail@gmail.com',
    to: 'recipientemail@gmail.com',
    subject: 'Test email',
    text: 'Hello from Node.js!'
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
