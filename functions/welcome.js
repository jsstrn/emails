exports.handler = function(event, context, callback) {
  const {queryStringParameters} = event;

  console.log(event);
  console.log(context);
  console.log(queryStringParameters);

  const error = null;
  callback(error, {
    statusCode: 200,
    body: "Hello, world"
  });
};
