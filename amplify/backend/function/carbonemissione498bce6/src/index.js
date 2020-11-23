

exports.handler = async (event, context, callback) => {
    // TODO implement
    console.log(event)
    let response = {
        sessionAttributes: event.sessionAttributes,
        dialogAction: {
            type: "Close",
            fulfillmentState: "Fulfilled",
            message: {
                contentType: "PlainText",
                content: "Thanks for purchasing book."
            }
        }
    }
    const response1 = {
        statusCode: 200,

        //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify('Hello from Lambda!'),
    };
    // return response;
    callback(null, response);
};
