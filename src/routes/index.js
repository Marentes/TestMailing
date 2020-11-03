const { Router } = require('express');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const router = Router();


router.post('/send-email', (req, res) => {
    const { name, email, phone, message } = req.body;
    res.send('recived');



    let contentHTML = `
        ${email}
    `;
    let contentHTML1 = `
        ${email}
    `;


    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'dallin45@ethereal.email',
            pass: 'UQtqeXuuwemD7uwJpw'

        },
        tls: {
            rejectUnauthorized: false
        }
    });
    transporter.use('compile', hbs({
        viewEngine: 'express-handlebars',
        viewPath: './views/'
    }))





    let mailOptions = {
        from: "'josemam' <dallin45@ethereal.email>",
        to: contentHTML1,
        subject: 'website contact form',
        text: 'Hola Mundo',
        template: 'index'

    };


    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error)
        }
        console.log('Message sent', info.messageId);
        res.redirect('/sucess.hmtl');

    });







})


module.exports = router;
