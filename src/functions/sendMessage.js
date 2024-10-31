const { app } = require("@azure/functions");

app.serviceBusQueue("sendMessage", {
  connection: "sendMessage_SERVICEBUS",
  queueName: "sendmessagetouser",
  handler: (message, context) => {
    context.log("Service bus queue function processed message:", message);
  },
});
