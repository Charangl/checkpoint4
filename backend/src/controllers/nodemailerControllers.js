require("dotenv").config();
const nodemailer = require("nodemailer");

const {
  SMTP_SENDIN,
  SMTP_PORT_SENDIN,
  SMTP_SENDIN_USER,
  SMTP_SENDIN_PASSWORD,
  MAIL_RECEIVER,
} = process.env;

const transporter = nodemailer.createTransport({
  host: SMTP_SENDIN,
  port: SMTP_PORT_SENDIN,
  secure: false,
  auth: {
    user: SMTP_SENDIN_USER,
    pass: SMTP_SENDIN_PASSWORD,
  },
});

const sendEmailWithText = (req, res) => {
  const options = {
    from: SMTP_SENDIN_USER,
    to: MAIL_RECEIVER || req.body.breedingEmail,
    subject: "Premier contact",
    text: `Message de : ${req.body.email} \n ${req.body.message}`,
  };
  transporter
    .sendMail(options)
    .then(() => {
      res.send("Email sent with success");
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { sendEmailWithText };
