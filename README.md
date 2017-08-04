### Chatbots & AI
 * Microsoft Bot Framework
    * Has three main components
        1. A RESTful Back-End Service.
            * Expose REST API for POST
            * SDK for Node, C#
            * Host anywhere (works GREAT on Azure!)
            * Integrates with LUIS (see below)
        2. The Bot Connector
            * Create / Manage Bots
            * Manage State
            * Translate output per channel capabilities
        3. The Channels
            * Text: Skype, Slack, Teams, SMS, Email, Facebook, & more
            * Voice: Cortana
            * Custom: Web Control, Direct Line (Your app, Alexa, etc)
* More information: 
    * [Bot Framework](https://dev.botframework.com/)
    * [Overview from Build 2017](https://channel9.msdn.com/Events/Build/2017/B8097)

### Cognitive Services
* 30+ APIs: Academic Knowledge, Bing Autosuggest, Bing Entities Search, Bing Image Search, Bing News Search, Bing Speech, Bing Spell Check, Bing Video Search, Bing Web Search, Bing Custom Search, Computer Vision, Content Moderator, Custom Decision Service, Custom Speech Service, Custom Vision Service, Emotion, Entity Linking, Face, Video Indexer, Knowledge Exploration Service, Linguistic Analysis, Language Understanding Intelligent Services (LUIS), QnAMaker, Recommendations, Speaker Recognition, Text Analytics, Translator, Video, Web Language Model
* Built on top of Bing search
* This bot utilizes 
    * LUIS for Natural Language Processing
    * Computer Vision for OCR
* More information:
    * [Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/?v=17.29)
    * [OCR Demo](https://azure.microsoft.com/en-us/services/cognitive-services/computer-vision/)
    * [OCR Docs](https://docs.microsoft.com/en-us/azure/cognitive-services/computer-vision/quickstarts/csharp#optical-character-recognition-ocr-with-computer-vision-api-using-ca-nameocr-a)
    * [Tons of videos](https://channel9.msdn.com/Events/Build/2017?sort=status&direction=desc&tag=cognitive%2Bservices&term=)
    * [Blog](https://azure.microsoft.com/en-us/blog/topics/cognitive-services/
    )

### Event Processing
* This bot utilizes 2 Azure technologies
    * Service Bus
        * Build Distributed, Decoupled Applications
        * Scalable, Reliable, Cloud Based Messaging
        * Pub/Sub to Multiple Backends
    * Logic Apps
        * Workflows in the cloud
        * Integrate with SaaS and Enterprise applications
        * Visual designer & declarative syntax. 
        * Fully automated deployment, management, monitoring and source code management.
* Both Service Bus and Logic Apps can connect to on-premises.
* In addition to Servie Bus:
    * Event Hubs to scale to millions of messages a second
    * IoT Hub for millions of messages from sensors and devices
    * Apache Kafka *as-a-Service*
* In addition to Logic Apps:
    * Microsoft Flow for O365 Information workers. Built on same technology as Logic Apps.
* More info
    * [Service Bus](https://azure.microsoft.com/en-us/services/service-bus/)
    * [Event Hub](https://azure.microsoft.com/en-us/services/event-hubs/)
    * [IoT Hub](https://azure.microsoft.com/en-us/services/iot-hub/)
    * [Kafka on Azure](https://azure.microsoft.com/en-us/services/hdinsight/apache-kafka/)
    * [Logic Apps](https://azure.microsoft.com/en-us/services/logic-apps/)
    * [Microsoft Flow](https://flow.microsoft.com/en-us/)
    * [Logic App Videos](https://channel9.msdn.com/Events/Build/2017?sort=status&direction=desc&tag=logic%2Bapps&term=)

     