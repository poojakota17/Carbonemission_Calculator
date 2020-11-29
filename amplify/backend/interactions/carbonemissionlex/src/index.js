const response = require('./cfn-response');
const aws = require('aws-sdk');
const iam = new aws.IAM();
const lambdaClient = new aws.Lambda({ apiVersion: '2017-04-19' });
exports.handler = function (event, context) {
    const lex = new aws.LexModelBuildingService({ apiVersion: '2017-04-19', region: event.ResourceProperties.lexRegion });
    if (event.RequestType == 'Delete') {
        response.send(event, context, response.SUCCESS);
        return;
    }
    let newSlotTypeParams = [




        {
            "name": "items",
            "description": "type of item",
            "enumerationValues": [

                {
                    "value": "coffee"
                },

                {
                    "value": "beef"
                },

                {
                    "value": "chocolate"
                },

                {
                    "value": "lamb"
                },

                {
                    "value": "fish"
                },

                {
                    "value": "redMeat"
                },

                {
                    "value": "whiteMeat"
                },

                {
                    "value": "cheese"
                },

                {
                    "value": "pork"
                },

                {
                    "value": "turkey"
                },

                {
                    "value": "chicken"
                },

                {
                    "value": "tuna"
                },

                {
                    "value": "eggs"
                },

                {
                    "value": "potatoes"
                },

                {
                    "value": "rice"
                },

                {
                    "value": "nuts"
                },

                {
                    "value": "beans"
                },

                {
                    "value": "tofu"
                },

                {
                    "value": "vegetables"
                },

                {
                    "value": "milk"
                },

                {
                    "value": "fruit"
                },

                {
                    "value": "lentils"
                },

                {
                    "value": "canesugar"
                },

                {
                    "value": "groundnuts"
                },

                {
                    "value": "wheat"
                },

                {
                    "value": "rye"
                },

                {
                    "value": "tomatoes"
                },

                {
                    "value": "maize"
                },

                {
                    "value": "cassava"
                },

                {
                    "value": "soymilk"
                },

                {
                    "value": "peas"
                },

                {
                    "value": "bananas"
                },

                {
                    "value": "citrus fruits"
                },

                {
                    "value": "root vegetables"
                },

                {
                    "value": "apples"
                },

                {
                    "value": "prawns"
                },

            ]
        },

        {
            "name": "confirmitem",
            "description": "give confirm",
            "enumerationValues": [

                {
                    "value": "yes"
                },

                {
                    "value": "no"
                },

                {
                    "value": "y"
                },

                {
                    "value": "n"
                },

            ]
        },




    ];
    let intentParams = [

        {
            "name": "calculatecarbonemission",

            "confirmationPrompt": {
                "maxAttempts": 2,
                "messages": [
                    {
                        "content": "Are you ready to calculate carbon emission for the products?",
                        "contentType": "PlainText"
                    }
                ]
            },


            "rejectionStatement": {
                "messages": [
                    {
                        "content": "Okay, carbon emission will not be calculated",
                        "contentType": "PlainText"
                    }
                ]
            },

            "sampleUtterances": [

                "Can u find total carbon emission",

                "Here are my products to calculate carbon emission",

                "Find carbon dioxide equivalent for my products",

                "Find carbon emission",

                "I want to calculate carbon emission for my produts",

                "Find total carbon emission for my products",

                "I want to find total carbon emission for my products",

                "I want to calculate carbon dioxide emission for my products",

                "Find total carbon dioxide emission for my products",

                "Please calculate carbon emission for me",

                "Please calculate emission score for my products",

                "I need to know carbon emissions value for my products",

                "I need to know carbon dioxide emissions value for my products ",

                "can u find total carbon emission",

                "Find emission",

            ],
            "dialogCodeHook": {
                "messageVersion": "1.0",
                "uri": "arn:aws:lambda:us-east-1:328229711407:function:lexcodehooklambda-dev"
            },

            "fulfillmentLambda": {
                "region": "us-east-1",
                "accountId": "328229711407",
                "lambdaArn": "arn:aws:lambda:us-east-1:328229711407:function:carbonemissioncalculator-dev",
                "lambdaName": "carbonemissioncalculator-dev",
            },
            "fulfillmentActivity": {
                "type": "CodeHook",
                "codeHook": {
                    "messageVersion": "1.0",
                    "uri": "arn:aws:lambda:us-east-1:328229711407:function:carbonemissioncalculator-dev"
                }
            },

            "slots": [



                {
                    "name": "items",
                    "slotConstraint": "Required",
                    "priority": 1,
                    "slotType": "items",
                    "slotTypeVersion": "$LATEST",
                    "valueElicitationPrompt": {
                        "maxAttempts": 3,
                        "messages": [
                            {
                                "content": "Please enter your product name.",
                                "contentType": "PlainText"
                            }
                        ]
                    }
                },

                {
                    "name": "quantity",
                    "slotConstraint": "Required",
                    "priority": 2,
                    "slotType": "AMAZON.NUMBER",

                    "valueElicitationPrompt": {
                        "maxAttempts": 3,
                        "messages": [
                            {
                                "content": "Please enter quantity of {items} (Enter quantity as number. If item is food, quantity is in kilogram, if item is a product, quantity is total number of products) ",
                                "contentType": "PlainText"
                            }
                        ]
                    }
                },

                {
                    "name": "confirm",
                    "slotConstraint": "Required",
                    "priority": 3,
                    "slotType": "confirmitem",
                    "slotTypeVersion": "$LATEST",
                    "valueElicitationPrompt": {
                        "maxAttempts": 3,
                        "messages": [
                            {
                                "content": "Do you want to enter more items? Please enter y/n or yes/no.",
                                "contentType": "PlainText"
                            }
                        ]
                    }
                },



            ]
        },

    ];
    let botName = "calculatecarbonemissionbot";
    if (process.env.ENV && process.env.ENV !== "NONE") {
        botName = botName + '_' + process.env.ENV;
    }

    let botParams = {
        "name": botName,
        "intents": [

            {
                "intentName": "calculatecarbonemission",
                "intentVersion": "$LATEST"
            },

        ],
        "childDirected": false,
        "locale": "en-US",
        "abortStatement": {
            "messages": [
                {
                    "content": "Sorry, I don't understand. Can you try again?",
                    "contentType": "PlainText"
                },
                {
                    "content": "I'm sorry, I don't understand.",
                    "contentType": "PlainText"
                }
            ]
        },
        "clarificationPrompt": {
            "maxAttempts": 3,
            "messages": [
                {
                    "content": "I'm sorry, I didn't hear that. Can you repeat what you just said?",
                    "contentType": "PlainText"
                },
                {
                    "content": "Can you say that again?",
                    "contentType": "PlainText"
                }
            ]
        },

        "voiceId": "Joanna",


        "idleSessionTTLInSeconds": "600"

    };

    checkAndCreateLexServiceRole()
        .then(() => { return getSlotTypes(newSlotTypeParams, lex); })
        .then(() => { return putSlotTypes(newSlotTypeParams, lex); })
        .then(() => { return getIntents(intentParams, lex); })
        .then(() => { return putIntents(intentParams, lex); })
        .then(() => { return getBot(botParams, lex); })
        .then(() => { return putBot(botParams, lex); })
        .then((res) => {
            response.send(event, context, response.SUCCESS, res.ApplicationResponse);
        })
        .catch((err) => {
            console.log(err.stack);
            response.send(event, context, response.FAILED, { Error: err });
            throw err;
        });
};

function checkAndCreateLexServiceRole() {

    return checkIfLexServiceRoleExists()
        .then((roleExists) => {
            if (!roleExists) {
                return createNewLexServiceRole();
            }
        });
}

function createNewLexServiceRole() {

    // Lex service automatically creates the needed polcies and truust relationships   
    const params = {
        AWSServiceName: 'lex.amazonaws.com',
        Description: 'Allows Amazon Lex to create and manage voice enabled bots on your behalf'
    };

    return iam.createServiceLinkedRole(params).promise();

}

function checkIfLexServiceRoleExists() {
    let rolePresent;

    const params = {
        RoleName: "AWSServiceRoleForLexBots"
    };

    return iam.getRole(params).promise()
        .then((result) => {
            rolePresent = true;
            return rolePresent;
        })
        .catch((e) => {
            rolePresent = false;
            return rolePresent;
        });
}

function getSlotTypes(newSlotTypeParams, lex) {
    const tasks = [];
    newSlotTypeParams.forEach(slotType => {
        const params = {
            'name': slotType.name,
            'version': '$LATEST'
        };
        tasks.push(
            lex.getSlotType(params).promise()
                .then((data) => {
                    slotType['checksum'] = data.checksum;
                })
                .catch((err) => {
                })
        );
    });
    return Promise.all(tasks);
}

function putSlotTypes(newSlotTypeParams, lex) {
    const tasks = [];
    newSlotTypeParams.forEach(slotType => {
        tasks.push(
            lex.putSlotType(slotType).promise()
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                    throw err;
                })
        );
    });
    return Promise.all(tasks);
}

function getIntents(intentParams, lex) {
    const tasks = [];
    intentParams.forEach(intent => {
        const params = {
            'version': '$LATEST',
            'name': intent.name
        };
        tasks.push(
            lex.getIntent(params).promise()
                .then((data) => {
                    intent['checksum'] = data.checksum;
                })
                .catch((err) => {
                })
        );
    });
    return Promise.all(tasks);
}

function putIntents(intentParams, lex) {
    const tasks = [];
    intentParams.forEach(intent => {
        tasks.push(
            ensureLambdaFunctionAccess(intent)
                .then(() => {
                    delete intent.fulfillmentLambda;
                    return lex.putIntent(intent).promise();
                })
                .then((data) => {
                    console.log(data);
                })
                .catch((err) => {
                    console.log(err);
                    throw err;
                })
        );
    });
    return Promise.all(tasks);
}

function ensureLambdaFunctionAccess(intent) {
    if (intent.fulfillmentLambda) {
        const {
            region,
            accountId,
            lambdaArn,
            lambdaName
        } = intent.fulfillmentLambda;

        const params = {
            FunctionName: lambdaName,
            StatementId: `Lex-${intent.name}` + "e4c1e55c",
            Action: 'lambda:InvokeFunction',
            Principal: 'lex.amazonaws.com',
            SourceArn: `arn:aws:lex:${region}:${accountId}:intent:${intent.name}:*`,
        }

        return lambdaClient.addPermission(params).promise()
            .then((data) => {
                console.log(data);
                return data;
            })
            .catch((err) => {
                console.log(err);
                throw err;
            });
    } else {
        return Promise.resolve(undefined);
    }
}

function getBot(botParams, lex) {
    params = {
        'name': botParams.name,
        'versionOrAlias': '$LATEST'
    };
    return lex.getBot(params).promise()
        .then((data) => {
            botParams['checksum'] = data.checksum;
        })
        .catch((err) => {
        });
}

function putBot(botParams, lex) {
    return lex.putBot(botParams).promise()
        .then((data) => {
            console.log(data);
            return data;
        })
        .catch((err) => {
            console.log(err);
            throw err;
        });
}