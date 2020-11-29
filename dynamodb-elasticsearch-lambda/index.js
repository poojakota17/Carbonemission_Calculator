var AWS = require('aws-sdk');
var moment = require("moment");
console.log('Loading function');


exports.handler = (event, context) => {
    console.log(event)

    var region = 'REPLACEME'; // e.g. us-west-1
    var domain = 'REPLACEME'; // e.g. search-domain.region.es.amazonaws.com
    var index = 'REPLACEME';
    var type = 'REPLACEME';
    var id = '1';

    for (const record of event.Records) {
        id = record.dynamodb.Keys.id.S;
        console.log('id', id);
        if (record.eventName == 'REMOVE') {
            // TODO
            return 'Item removed';
        } else {

            var json = record.dynamodb.NewImage;
            var unmarshalled = AWS.DynamoDB.Converter.unmarshall(json);
            console.log("json", json);
            console.log("unmarshalled", unmarshalled);
            var date = new Date();
            date = date.toString();
            unmarshalled["period"] = moment(date).format('yyyy-MM-DD');
            console.log(unmarshalled["period"]);
            indexDocument(unmarshalled);

        }
    }
    function indexDocument(document) {
        var endpoint = new AWS.Endpoint(domain);
        var request = new AWS.HttpRequest(endpoint, region);

        request.method = 'PUT';
        request.path += index + '/' + type + '/' + id;

        request.body = JSON.stringify(document);
        request.headers['host'] = domain;
        request.headers['Content-Type'] = 'application/json';

        request.headers['Content-Length'] = Buffer.byteLength(request.body);

        var credentials = new AWS.EnvironmentCredentials('AWS');
        var signer = new AWS.Signers.V4(request, 'es');
        signer.addAuthorization(credentials, new Date());
        console.log("httpclient")
        var client = new AWS.HttpClient();
        client.handleRequest(request, null, function (response) {
            console.log(response.statusCode + ' ' + response.statusMessage);
            var responseBody = '';
            response.on('data', function (chunk) {
                responseBody += chunk;
            });
            response.on('end', function (chunk) {
                console.log('Response body: ' + responseBody);
                return responseBody;
            });
        }, function (error) {
            console.log('Error: ' + error);
        });
    }
};

/*
Permission needed in addition to lamda basic execution policy
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "dynamodb:DescribeStream",
                "dynamodb:GetRecords",
                "dynamodb:GetShardIterator",
                "dynamodb:ListStreams"
            ],
            "Effect": "Allow",
            "Resource": [
                "Dynamodbstream_arn"
            ]
        }
    ]
}

{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "es:*"
            ],
            "Effect": "Allow",
            "Resource": "Elasticsearchdomain_arn/*"
        }
    ]
}
*/
