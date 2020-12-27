const nodeMailer = require('nodemailer');
require('dotenv').config()

const user_mail = {
  user: process.env.user,
  pass: process.env.pass
}

const transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, 
  auth: {
    user: user_mail.user,
    pass: user_mail.pass
  }
});

export default function handler(req, res) {
  //getting data
  var data = req.body
  // sending mail
  transporter.sendMail({
    from: user_mail.user,
    to: "hlcode.contato@gmail.com",
    subject: "Entrar em contato",
    text: `
        name: ${data.name}
        email: ${data.email}
        phone: ${data.telephone}
        whatsapp: ${data.whatsapp}
        description: ${data.description}`
  }).then(info => {
    res.redirect(301, '/portifolio')
  }).catch(error => {
    res.send(error)
  })
}