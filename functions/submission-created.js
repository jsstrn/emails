const sgMail = require("@sendgrid/mail");
const templateId = "d-56e970c0a6f740aea7ba6744f806987d";

exports.handler = function(event, context, callback) {
  try {
    console.log(event);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
      to: "test@example.com",
      from: {name: "Jumpstart", email: "info@jumpstart.sh"},
      template_id: templateId
    };

    sgMail.send(message);

    callback(null, {
      statusCode: 200,
      body: "Email has been delivered"
    });
  } catch (error) {
    callback(error);
  }
};
