'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

//Database Connection
const admin = require('firebase-admin');
admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'ws://FIREBASEURL'
});

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
 function handle(PARAMETER)(agent){
     const sent(PARAMETER) = agent.parameters.(PARAMETER);
     agent.add('Thank You...');

      return admin.database().ref('NAME').transaction(((PARAMETER)) => {
      if((PARAMETER) !== null) {
        let new(PARAMETER) = sent(PARAMETER);
        (PARAMETER) = new(PARAMETER);
        
        agent.add(`Viewing ` + new(PARAMETER) + ' on Liquid Galaxy');
      }
      return (PARAMETER);
    }, function(error, isSuccess) {
      console.log('Added (PARAMETER) to Database: ' + isSuccess);
    });
 }

  let intentMap = new Map();
  intentMap.set('activate(PARAMETER)', handle(PARAMETER));
  
 
  agent.handleRequest(intentMap);
});
