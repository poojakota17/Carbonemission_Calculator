
exports.handler = (event, context, callback) => {
    var sessionAttributes = event.sessionAttributes;
    var slots = event.currentIntent.slots;
    var category = slots.category;
    const intentname = event.currentIntent.name
    const food = slots.items;
    const quantity = slots.quantity;

    let source = event.invocationSource;
    let confirm = slots.confirm;
    let SA = {};

    // predefined list of available books

    const validfooditmes = ['beef', 'lamb', 'eggs', 'fruits'];
    const validmoreitem = ['yes', 'y', 'no', 'n'];

    // negative check: if valid slot value is not obtained, inform lex that user is expected 
    // respond with a slot value 
    console.log("food")
    console.log(food)
    if (food && !(food === "") && validfooditmes.indexOf(food.toLowerCase()) === -1) {
        let response = {
            sessionAttributes: sessionAttributes,
            dialogAction: {
                type: "ElicitSlot",
                message: {
                    contentType: "PlainText",
                    content: `Sorry, we do not currently have record for product: ${items}, Please enter another item`
                },

                intentName: event.currentIntent.name,
                slots: slots,
                slotToElicit: "items"
            }
        }
        callback(null, response);
    }

    if (confirm === 'yes' || confirm === 'y') {
        if (sessionAttributes === null) {
            sessionAttributes = {};
        }
        let key = slots.items;
        let value = slots.quantity;
        if (key in sessionAttributes) {
            var a = parseFloat(sessionAttributes[key]);
            console.log("a", a)
            var b = parseFloat(value);
            console.log("b", b)
            console.log("a+b", a + b)
            sessionAttributes[key] = a + b;
            console.log()
        } else {
            SA[key] = value;
            console.log("sessionattributes SA")
            console.log(SA);
            Object.assign(sessionAttributes, SA)

        }



        let response = {
            sessionAttributes: sessionAttributes,
            dialogAction: {
                type: "Delegate",
                slots: null



            }
        }
        callback(null, response);
    }



    console.log(event)
    let response = {
        sessionAttributes: sessionAttributes,
        dialogAction: {
            type: "Delegate",
            slots: event.currentIntent.slots
        }
    }
    callback(null, response);
};







// exports.handler = async (event) => {
//     // TODO implement
//     const response = {
//         statusCode: 200,
//         //  Uncomment below to enable CORS requests
//         //  headers: {
//         //      "Access-Control-Allow-Origin": "*"
//         //  }, 
//         body: JSON.stringify('Hello from Lambda!'),
//     };
//     return response;
// };
