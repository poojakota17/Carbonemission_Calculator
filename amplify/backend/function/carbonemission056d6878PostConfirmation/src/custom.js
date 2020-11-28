exports.handler = (event, context, callback) => {
  // insert code to be executed by your lambda trigger
  console.log(event)
  console.log(context)
  callback(null, event);
};
