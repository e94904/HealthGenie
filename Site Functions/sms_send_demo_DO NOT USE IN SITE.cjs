// Download the helper library from https://www.twilio.com/docs/node/install
// Set environment variables for your credentials
// Read more at http://twil.io/secure

const twilio = require('twilio');
const accountSid = "AC39b0e2a636f9cb6eaeadd9b60d4f32dd";
const authToken = "1c43f9fe78c898b109cdd7f67b386e15";
const client = require("twilio")(accountSid, authToken);

client.messages.create({ body: "Hello from Twilio", from: "+18887203518", to: "+14085992835" }).then(message => console.log(message.sid));
