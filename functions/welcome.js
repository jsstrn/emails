const sgMail = require("@sendgrid/mail");

exports.handler = function(event, context, callback) {
  try {
    const {queryStringParameters} = event;
    const {email} = queryStringParameters;

    console.log(email);

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const message = {
      to: email,
      from: "test@example.com",
      subject: "My first email",
      text: "This is my first email"
    };

    sgMail.send(message);

    callback(null, {
      statusCode: 200,
      body: "Welcome email was sent"
    });
  } catch (error) {
    callback(error);
  }
};
