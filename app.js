var restify = require('restify');
var builder = require('botbuilder');
var sb = require('./sb');
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
    session.beginDialog('helloDialog');
});

// Add a global LUIS recognizer to the bot by using the endpoint URL of the LUIS app
var model = 'https://eastus2.api.cognitive.microsoft.com/luis/v2.0/apps/e86551ad-3835-4eba-a0a7-f9b9baedca75?subscription-key=a9f1a1f4d2324203b0ea638d2a9fad76&verbose=true&timezoneOffset=0&q=';
bot.recognizer(new builder.LuisRecognizer(model));
bot.dialog('helloDialog', [
    function (session) {
        if (session.userData.email) {
            session.send('Hey %s, enter a URL and I\'ll send you the text!');
            session.endDialog('Let me know if you want to change your email address.');
        }
        else {
            session.send('Hey buddy! Welcome to the OCR bot. Send me a URL and I will email you the text.');
            session.beginDialog('emailDialog');
        }
    }
]);

bot.dialog('emailDialog', [
    function (session) {
        builder.Prompts.text(session, 'what is your email address?')
    },
    function (session, results) {
        session.userData.email = results.response;
        session.endDialog('Thanks, I will send emails to *%s*', session.userData.email);
    }
]).triggerAction({ matches: 'Email' });

bot.dialog('noneDialog', [
    function (session) {
        if (session.userData.email) {
            session.endDialog('Hey %s! You can change your email or send me a URL!', session.userData.email);
        }
        else {
            session.send('Hey buddy! Welcome to the OCR bot. Send me a URL and I will email you the text.');
            session.beginDialog('emailDialog');
        }
    }
]).triggerAction({ matches: 'None' });

bot.dialog('urlDialog', function (session) {
    sb(session.userData.email, session.message.text);
    session.endDialog("I like that URL!");
}).triggerAction({ matches: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ });
