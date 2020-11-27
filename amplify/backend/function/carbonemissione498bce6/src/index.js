/* Amplify Params - DO NOT EDIT
	API_CARBONEMISSIONCALCI_GRAPHQLAPIENDPOINTOUTPUT
	API_CARBONEMISSIONCALCI_GRAPHQLAPIIDOUTPUT
	AUTH_CARBONEMISSION056D6878_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT *///import { food } from 'carbon-footprint'
const food = require('carbon-footprint');
const axios = require('axios');
const gql = require('graphql-tag');
const graphql = require('graphql');
const { print } = graphql;

const createSpendings = /* GraphQL */ gql`
  mutation CreateSpendings(
    $input: CreateSpendingsInput!
    $condition: ModelSpendingsConditionInput
  ) {
    createSpendings(input: $input, condition: $condition) {
      id
      title
      quantity
      emission
      period
      metadata {
        category
      }
      createdAt
      updatedAt
      owner
    }
  }
`;

exports.handler = async (event, context, callback) => {
    // TODO implement
    //console.log(event);
    console.log(process.env.ENV)
    /* Unit: kgCO2eq*/
    let emissionquantity_dict = {


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
    };
    const key = event.currentIntent.slots.items;
    const value = parseFloat(event.currentIntent.slots.quantity);
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
      try {
    const graphqlData = await axios({
      url: process.env.API_CARBONEMISSIONCALCI_GRAPHQLAPIENDPOINTOUTPUT,
      method: 'post',
      headers: {
        'x-api-key': process.env.API_CARBONEMISSIONCALCI_GRAPHQLAPIIDOUTPUT
      },
      data: {
        query: print(createSpendings),
        variables: {
          input: {
            title: "Hello world!",
            quantity: 5,
            emission: 7,
            period: "2020-11-01Z"
          }
        }
      }
    });

    console.log("successfully created item")
  } catch (err) {
    console.log('error creating todo: ', err);
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
    };
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
