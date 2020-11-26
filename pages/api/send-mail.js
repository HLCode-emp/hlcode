const nodeMailer = require('nodemailer');

const user_mail = {
    user: "hlcode.contato@gmail.com",
    pass: "5nbYl$aNY@V2"
}

const transporter = nodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
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
        to: user_mail.user,
        subject: "Entrar em contato",
        text: `
        name: ${data.name}
        email: ${data.email}
        phone: ${data.telephone}
        whatsapp: ${data.whatsapp}
        description: ${data.description}`
    }).then(info =>{
        res.end(res.redirect('/'))
    }).catch(error => {
        res.end(res.send(error))
    })
  }



