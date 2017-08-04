var dotenv = require('dotenv').config();
var azure = require('azure');

//var serviceBusService = azure.createServiceBusService();
var serviceBusService = azure.createServiceBusService('Endpoint=sb://botbus.servicebus.windows.net/;SharedAccessKeyName=RootManageSharedAccessKey;SharedAccessKey=u7ORBFDotue0j3xj7WZj5qJpQrhmXKa5XekWRO1M5mc=');




module.exports = function (email, url) {
    var messageBody = {
        email: email,
        imageUrl: url
    };
    serviceBusService.sendTopicMessage('usertopic', JSON.stringify(messageBody), function (error) {
        if (error) {
            console.log(error);
        }
    });
};