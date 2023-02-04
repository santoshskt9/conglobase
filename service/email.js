const sib = require("sib-api-v3-sdk");
const client = sib.ApiClient.instance;
const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.SIB_API_KEY;
let sendEmailService = function sendSibEmail(receiverEmail, subject, html) {
  const tranEmailApi = new sib.TransactionalEmailsApi();
  const sender = {
    email: process.env.DEFAULT_EMAIL_SENDER || "noreply@conglobase.com",
    name: process.env.DEFAULT_EMAIL_NAME || "Conglobase",
  };
  const reciever = {
    email: receiverEmail,
  };
  return tranEmailApi
    .sendTransacEmail({
      sender,
      to: [reciever],
      subject: subject,
      htmlContent: html,
      params: {
        role: "frontend",
      },
    })
    .then((res) => {
      console.log({
        message: `Email sent successfully with message ID ${res.messageId}`,
        Email: reciever,
        subject: subject,
        htmlContent: html,
      });
      return true;
    })
    .catch((err) => {
      console.log({ message: "Email Sending Error", error: err });
      return false;
    });
};

module.exports = sendEmailService;
