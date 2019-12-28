const sgMail = require("@sendgrid/mail");
const templateId = "d-56e970c0a6f740aea7ba6744f806987d";

exports.handler = function(event, context, callback) {
  try {
    const {queryStringParameters} = event;
    const {email} = queryStringParameters;

    console.log(email);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
      to: email,
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
