const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "tlisovets@gmail.com" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;




// const nodemailer = require("nodemailer");
// require("dotenv").config();

// const { META_PASSWORD } = process.env;

// const nodemailerConfig = {
//   host: "smtp.meta.ua",
//   port: 465,
//   secure: true,
//   auth: {
//       user: "skm92@meta.ua",
//       pass: META_PASSWORD,
//   },
// };

// const transport = nodemailer.createTransport(nodemailerConfig);

// const sendEmail = async (data) => {
//     const email = { ...data, from: "skm92@meta.ua" };
//     await transport.sendMail(email);
//     return true;
// }

// module.exports = sendEmail;





















// ----------------------------------------------------------

// const email = {
//   to: "1192skm@gmail.com",
//   from: "skm92@meta.ua",
//   subject: "Test email",
//   html: "<p>Test email from localhost:3000</p>",
// };

// transport
//   .sendMail(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.log(error.message));
