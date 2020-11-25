
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
    const validcategory = ['food', 'fooditems', 'products'];
    const validfooditmes = ['beef', 'lamb', 'eggs', 'fruits'];
    const validmoreitem = ['yes', 'y', 'no', 'n'];

    // negative check: if valid slot value is not obtained, inform lex that user is expected 
    // respond with a slot value 
    console.log("category")
    console.log(category)
    if (category && !(category === "") && validcategory.indexOf(category.toLowerCase()) === -1) {
        let response = {
            sessionAttributes: sessionAttributes,
            dialogAction: {
                type: "ElicitSlot",
                message: {
                    contentType: "PlainText",
                    content: `sorry, we do not have this category: ${category}, Please choose from either food or products.`
                },
                intentName: event.currentIntent.name,
                slots: slots,
                slotToElicit: "category"
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
        SA[key] = value;
        console.log("sessionattributes SA")
        console.log(SA);
        Object.assign(sessionAttributes, SA)

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
