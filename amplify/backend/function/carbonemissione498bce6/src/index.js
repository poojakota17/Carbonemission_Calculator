/* Amplify Params - DO NOT EDIT
	API_CARBONEMISSIONCALCI_GRAPHQLAPIENDPOINTOUTPUT
	API_CARBONEMISSIONCALCI_GRAPHQLAPIIDOUTPUT
	AUTH_CARBONEMISSION056D6878_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT *///import { food } from 'carbon-footprint'
food = require('carbon-footprint')

exports.handler = async (event, context, callback) => {
    // TODO implement
    console.log(event)
    /* Unit: kgCO2eq*/
    emissionquantity_dict = {


        smartphone: 80,
        tablet: 87,
        computer: 588,
        laptop: 210,
        tv: 500,
        hybridCar: 6500,
        eletricCar: 8800,
        shirt: (13 + 12) / 2,
        tshirt: (7 + 10 + 6) / 3,
        jeans: 25,
        sweater: (28 + 26 + 31 + 56 + 12) / 5,
        coat: (89 + 39 + 25) / 3,
        dress: (56 + 56 + 51) / 3,
        shoes: (15 + 19 + 20) / 3,
        lamb: 39.2,
        beef: 27.0,
        redMeat: (39.2 + 27) / 2,
        cheese: 13.5,
        pork: 12.1,
        turkey: 10.9,
        chicken: 6.9,
        whiteMeat: (12.1 + 10.9 + 6.9) / 3,
        tuna: 6.1,
        fish: 6.1,
        eggs: 4.8,
        potatoes: 2.9,
        rice: 2.7,
        nuts: 2.3,
        beans: 2.0,
        tofu: 2.0,
        vegetables: 2.0,
        milk: 1.9,
        fruit: 1.1,
        lentils: 0.9,
        coffee: 3.14,
        chocolate: 4.87
    }
    key = event.currentIntent.slots.items;
    value = parseFloat(event.currentIntent.slots.quantity);
    let score = 0;

    if (event.sessionAttributes === null) {

        score = emissionquantity_dict[key] * value;
    } else {
        let list = event.sessionAttributes;
        //console.log(list);

        for (var p in list) {
            if (list.hasOwnProperty(p)) {
                console.log(p)
                console.log(list[p])
                var a = parseFloat(list[p])
                score = (emissionquantity_dict[p] * a) + (emissionquantity_dict[key] * value);

            }
        }
    }

    let response = {
        sessionAttributes: null,
        dialogAction: {
            type: "Close",
            fulfillmentState: "Fulfilled",
            message: {
                contentType: "PlainText",
                content: `Your total carbon emission is ${score} kgCO2 equivalent`
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
