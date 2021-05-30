const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'parthsinghal51@gmail.com',
        subject: 'Welcome! Thanks for joining in!',
        text: `Welcome ${name} to the Task Managing App, hope you are doing well...`,
    })
}

module.exports = {
    sendWelcomeEmail
}