## Project II : CMPE 281- Cloud Technologies
# **Carbon Emission Calculator**

### Team : Modular Monolith
### Team Member : 

1) Anastasia Zimina
2) Manjiri Kadam
3) Pooja Prasannan


### Checkout our website:


# Introduction:

Climate change is a big, alarming issue now-a-days. Due to progression in technologies and capitalism our food consumption and lifestyle has changed drastically over the past few decades. Previously man used to hunt for filling the appetite, now we eat fancy, processed and comfort food which is producing hazardous greenhouse gases which is depleting the Ozone layer and is inducing global warming. 
Every organic product(Containing HydroCarbons) has its own Carbon Footprint. Carbon footprint is the total amount of CO2 and other greenhouse gases emitted over the life cycle of the product or service, expressed as kilograms of Carbon dioxide equivalent.
Due to increase in livestock production, advancement in farming and industrialization food production is increasing, so is the carbon footprint for food production. It is very important to give special attention to the food we consume in order to maintain environmental balance. In our project we are implementing the solution to help people make the better choice in food consumption which is environmentally efficient and produces less Carbon emission.

# Project Idea:

In our project, we have developed a bot to find carbon emission of products. The user has to input the type of item and the quantity and the bot will evaluate the total answer i.e the total amount of carbon emission of those products in kg CO2 equivalent. The user can input a budget for his/her emission and can compare whether he/she exceeds the budget or not. For developing the bot we have used `Amazon Lex bot`. The user’s records with the items purchased, its quantity, emission, budget are stored in Dynamodb.  On each record addition in `Dynamodb, lambda is triggered to add the dynamodb streams to elasticsearch cluster`. We are then analysing the data about `total emissions` using `Kibana`.


# Implementation:

We have used Amazon Web Services as the backbone of our project. Our application is Serverless, front-end designed using React framework with NodeJS.

'''
#  AWS Services used          Functionality
-Cognito							  :		Authentication & Authorization
-Lambda  					  	  :		Serverless application
-AWS Amplify  					:		CI/CD deployment & hosting                 
-Amazon Lex						  :		Chatbot for interaction
-DynamoDB					  	  :		Scalable NoSQL Database
-AWS AppSync 					  :		GraphQL API based backend
-ElasticSearch Service	:		Indexing and analytics 	
-Cloudwatch						  :		App health monitoring
-SNS						      	:		Notification for alarm

# Other Services            Functionality
-GoDaddy               :     Domain name registration
-Kibana                :     Visual representation
-Twitter               :     Timeline feeds
'''


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
































