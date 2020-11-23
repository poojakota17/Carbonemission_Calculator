
exports.handler = (event, context, callback) => {
    const sessionAttributes = event.sessionAttributes;
    const slots = event.currentIntent.slots;
    const category = slots.category;
    const food = slots.food;

    // predefined list of available books
    const validcategory = ['food', 'fooditems', 'products'];
    const validfooditmes = ['beef', 'lamb', 'eggs', fruits];

    // negative check: if valid slot value is not obtained, inform lex that user is expected 
    // respond with a slot value 
    if (category && !(category === "") && validcategory.indexOf(category.toLowerCase()) === -1) {
        let response = {
            sessionAttributes: event.sessionAttributes,
            dialogAction: {
                type: "ElicitSlot",
                message: {
                    contentType: "PlainText",
                    content: `sorry, we do not have this category: ${category}, Please choose from category -> food or products.`
                },
                intentName: event.currentIntent.name,
                slots: slots,
                slotToElicit: "category"
            }
        }
        callback(null, response);
    }
    // else if ()


    // if valid book name is obtained, send command to choose next course of action
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
