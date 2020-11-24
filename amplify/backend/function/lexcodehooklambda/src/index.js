
exports.handler = (event, context, callback) => {
    const sessionAttributes = event.sessionAttributes;
    const slots = event.currentIntent.slots;
    const category = slots.category;
    const food = slots.food;
    const quantity = slots.Quantity;
    const moreitem = slots.moreitem;

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

    console.log("category")
    console.log(category)
    if (category === 'food' && food && !(food === "") && validfooditmes.indexOf(food.toLowerCase()) === -1) {
        let response = {
            sessionAttributes: event.sessionAttributes,
            dialogAction: {
                type: "ElicitSlot",
                message: {
                    contentType: "PlainText",
                    content: `Please enter a valid food item`
                },
                intentName: event.currentIntent.name,
                slots: slots,
                slotToElicit: "food"
            }
        }
        callback(null, response);
    }
    console.log("food")
    console.log(food)
    if (category === 'food' && food && !(food === "") && validfooditmes.indexOf(food.toLowerCase()) >= 0) {
        let response = {
            sessionAttributes: sessionAttributes,
            dialogAction: {
                type: "ElicitSlot",
                message: {
                    contentType: "PlainText",
                    content: `Please enter the quantity for food item`
                },


                intentName: event.currentIntent.name,
                slots: slots,
                slotToElicit: "Quantity"
            }
        }
        callback(null, response);
    }
    if (category === 'food' && food && !(food === "") && validfooditmes.indexOf(food.toLowerCase()) >= 0 && quantity) {
        let response = {
            sessionAttributes: sessionAttributes,
            dialogAction: {
                type: "ElicitSlot",
                message: {
                    contentType: "PlainText",
                    content: `Do you want to enter more items`
                },


                intentName: event.currentIntent.name,
                slots: slots,
                slotToElicit: "moreitem"
            }
        }
        callback(null, response);
    }
    if (category === 'food' && food && !(food === "") && validfooditmes.indexOf(food.toLowerCase()) >= 0 && quantity && validmoreitem.indexOf(moreitem.toLowerCase()) === -1) {
        let response = {
            sessionAttributes: sessionAttributes,
            dialogAction: {
                type: "ElicitSlot",
                message: {
                    contentType: "PlainText",
                    content: `Please enter a valid response(yes/no or y/n)`
                },


                intentName: event.currentIntent.name,
                slots: slots,
                slotToElicit: "moreitem"
            }
        }
        callback(null, response);
    }
    if (category === 'food' && food && !(food === "") && validfooditmes.indexOf(food.toLowerCase()) >= 0 && quantity && validmoreitem.indexOf(moreitem.toLowerCase()) >= 0) {
        let response = {
            sessionAttributes: sessionAttributes,
            dialogAction: {
                type: "ElicitSlot",
                message: {
                    contentType: "PlainText",
                    content: `Please enter a food item`
                },


                intentName: event.currentIntent.name,
                slots: slots,
                slotToElicit: "food"
            }
        }
        callback(null, response);
    }
    if (category === 'food' && food && !(food === "") && validfooditmes.indexOf(food.toLowerCase()) >= 0 && quantity && validmoreitem.indexOf(moreitem.toLowerCase()) >= 0) {
        let response = {
            sessionAttributes: sessionAttributes,
            dialogAction: {
                type: "ElicitSlot",
                message: {
                    contentType: "PlainText",
                    content: `Please enter the quantity`
                },


                intentName: event.currentIntent.name,
                slots: slots,
                slotToElicit: "Quantity"
            }
        }
        callback(null, response);
    }
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
