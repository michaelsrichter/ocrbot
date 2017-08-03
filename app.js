var restify = require('restify');
var builder = require('botbuilder');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
   console.log('%s listening to %s', server.name, server.url); 
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MICROSOFT_APP_ID,
    appPassword: process.env.MICROSOFT_APP_PASSWORD
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, function (session) {
    session.send("You said: %s", session.message.text);
});

// Add a global LUIS recognizer to the bot by using the endpoint URL of the LUIS app
var model = 'https://eastus2.api.cognitive.microsoft.com/luis/v2.0/apps/e86551ad-3835-4eba-a0a7-f9b9baedca75?subscription-key=a9f1a1f4d2324203b0ea638d2a9fad76&verbose=true&timezoneOffset=0&q=';
bot.recognizer(new builder.LuisRecognizer(model));
//bot.recognizer(new builder.RegExpRecognizer( 'Url', { en_us: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ }));
bot.dialog('helloDialog', function (session) {
    session.endDialog("Hey! Welcome to the OCR Bot. Send me a URL to an image and I will email it to you.");
}).triggerAction({ matches: 'Hello' });
bot.dialog('urlDialog', function (session) {
    session.endDialog("I like that URL!");
}).triggerAction({ matches: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ });
