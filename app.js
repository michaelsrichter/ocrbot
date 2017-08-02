var dotenv = require('dotenv').config();
var azure = require('azure');

//var serviceBusService = azure.createServiceBusService();
var serviceBusService = azure.createServiceBusService('Endpoint=sb://avidxchangeapp.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=oSW52P66KCRqElm28GAkSZdZQl/vqLq7ULWpwgPRFhs=');

var messageBody = {
    email: process.argv[2],
    name: process.argv[3],
    password: process.argv[4]
};

serviceBusService.sendTopicMessage('usertopic', JSON.stringify(messageBody), function (error) {
    if (error) {
        console.log(error);
    }
});
