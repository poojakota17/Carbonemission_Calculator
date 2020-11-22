

exports.handler = async (event) => {
    // TODO implement
    console.log(event)
    const response = {
        statusCode: 200,

        //  Uncomment below to enable CORS requests
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
