import sgMail from "@sendgrid/mail";
import "dotenv/config";

const { SENDGRID_API_KEY, EMAIL_FROM } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (message) => {
  const from = EMAIL_FROM;
  await sgMail.send({ ...message, from });
};

export default sendEmail;
