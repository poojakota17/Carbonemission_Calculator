/* Amplify Params - DO NOT EDIT
	API_CARBONEMISSIONCALCI_GRAPHQLAPIENDPOINTOUTPUT
	API_CARBONEMISSIONCALCI_GRAPHQLAPIIDOUTPUT
	AUTH_CARBONEMISSION056D6878_USERPOOLID
	ENV
	REGION
  SPENDINGS_TABLE
  IDENTITY_TABLE
  BALANCE_TABLE
Amplify Params - DO NOT EDIT *///import { food } from 'carbon-footprint'

var AWS = require('aws-sdk'),
    food = require('carbon-footprint'),
    uuid = require('uuid'),
    docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});
    AWS.config.update({region: process.env.REGION});

exports.handler = async (event, context, callback) => {
    const today = new Date();
    const cognitoId = await getOwnerId(event.userId);
    console.log(cognitoId)
    const period = `${today.getFullYear()}-${today.getMonth() + 1}-01Z`;
    const currentSpendings = await getSpendings(cognitoId, period);

    /* Unit: kgCO2eq*/
    let emissionquantity_dict = {
        smartphone: [80,"product"],
        tablet: [87,"product"],
        computer: [588,"product"],
        laptop: [210,"product"],
        tv: [500,"product"],
        hybridCar: [6500,"product"],
        eletricCar: [8800,"product"],
        shirt: [(13 + 12) / 2,"product"],
        tshirt: [(7 + 10 + 6) / 3,"product"],
        jeans: [25,"product"],
        sweater: [(28 + 26 + 31 + 56 + 12) / 5,"product"],
        coat: [(89 + 39 + 25) / 3,"product"],
        dress: [(56 + 56 + 51) / 3,"product"],
        shoes: [(15 + 19 + 20) / 3,"product"],
        lamb: [39.2,"food"],
        beef: [27.0,"food"],
        redMeat: [(39.2 + 27) / 2,"food"],
        cheese: [13.5,"food"],
        pork: [12.1,"food"],
        turkey: [10.9,"food"],
        chicken: [6.9,"food"],
        whiteMeat: [(12.1 + 10.9 + 6.9) / 3,"food"],
        tuna: [6.1,"food"],
        fish: [6.1,"food"],
        eggs: [4.8,"food"],
        potatoes: [2.9,"food"],
        rice: [2.7,"food"],
        nuts: [2.3,"food"],
        beans: [2.0,"food"],
        tofu: [2.0,"food"],
        vegetables: [2.0,"food"],
        milk: [1.9,"food"],
        fruit: [1.1,"food"],
        lentils: [0.9,"food"],
        coffee: [3.14,"food"],
        chocolate: [4.87,"food"]
    };
    const key = event.currentIntent.slots.items;
    const value = parseFloat(event.currentIntent.slots.quantity);
    let totalScore = 0;
    let itemScore = 0;
    var res;

    itemScore = emissionquantity_dict[key][0] * value;
    totalScore += itemScore;
    if (cognitoId != null)
        res = await addDataToDB(key, value, itemScore, emissionquantity_dict[key][1], cognitoId, period);
    console.log(res);
    if (event.sessionAttributes !== null) {
        let list = event.sessionAttributes;
        for (var p in list) {
            if (list.hasOwnProperty(p)) {
                console.log(p)
                console.log(list[p])
                var a = parseFloat(list[p]);
                itemScore = (emissionquantity_dict[p][0] * a);
                if (cognitoId != null)
                    res = await addDataToDB(p, a, itemScore, emissionquantity_dict[p][1], cognitoId, period);
                totalScore += itemScore;
            }
        }
    }
    await updateSpendings(currentSpendings, cognitoId, period, totalScore);
    let response = {
        sessionAttributes: null,
        dialogAction: {
            type: "Close",
            fulfillmentState: "Fulfilled",
            message: {
                contentType: "PlainText",
                content: `Your total carbon emission is ${totalScore} kgCO2 equivalent`
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

async function getOwnerId(identId) {
  var params = {
      TableName: process.env.IDENTITY_TABLE,
      ExpressionAttributeNames: {
          "#pi": "pool_id",
          "#o": "owner"
      },
      ExpressionAttributeValues: {
           ":p": identId
      },
      FilterExpression: "#pi = :p",
      ProjectionExpression: "#o"
  };
  try {
  const result = await docClient.scan(params).promise();
  if (result.Items.length)
    return result.Items[0].owner;
    return null;
  } catch (e) {
      console.log(e)
      return null;
  }
}

async function addDataToDB(i, q, s, c, o, p) {
    console.log(i);
    console.log(q);
    console.log(s);
    console.log(c);
    console.log(o);
    console.log(p);
    var params = {
        TableName: process.env.SPENDINGS_TABLE,
        Item: {
                "id": uuid.v1(),
                "item": i,
                "quantity": q,
                "emission": s,
                "category": c,
                "owner": o,
                "period": p
        }
    };
    try {
      const result = await docClient.put(params).promise();
      if (result.Items)
        return "Success";
    } catch(e) {
        console.log(e)
        return null;
    }
}

async function getSpendings(owner, period) {
    console.log(owner)
    console.log(period)
  var params = {
      TableName: process.env.BALANCE_TABLE,
      ExpressionAttributeNames: {
          "#p": "period",
          "#sp": "cspendings",
          "#o": "owner",
          "#id": "id"
      },
      ExpressionAttributeValues: {
           ":o": owner
      },
      FilterExpression: "#o = :o",
      ProjectionExpression: "#id, #o, #sp, #p"
  };

  try {
      const result = await docClient.scan(params).promise();
      const currentBalance = result.Items.filter(record => record.period == period)
      if (currentBalance.length)
        return currentBalance[0];
      return null;
  } catch(e) {
      console.log(e)
      return null;
  }
}

async function updateSpendings(currentSpendings, owner, period, newSpendings) {
    console.log(currentSpendings)
    console.log(period)
    console.log(newSpendings)
    if (currentSpendings != null) {
        const id = currentSpendings.id;
        var params = {
            TableName: process.env.BALANCE_TABLE,
            Key: { id },
            UpdateExpression: 'set cspendings = :sp',
            ExpressionAttributeValues: {
                   ":sp": currentSpendings.cspendings + newSpendings
            }
        };
        try {
            const result = await docClient.update(params).promise();
            return ("Success");
        } catch(e) {
            console.log(e);
            return `Fail: ${e}`;
        }
    }
    else {
        console.log("need to add new balance")
        var params = {
            TableName: balanceTable,
            Item: {
                "id": uuid.v1(),
                "owner": owner,
                "cbudget": 0,
                'cspendings': newSpendings,
                "period": period
            }
        }
        try {
            await docClient.put(params).promise()
            return "Success"
        } catch (e) {
            console.log(e);
            return `Fail: ${e}`;
        }
    }
}
