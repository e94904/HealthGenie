const prompt = require('prompt-sync')();
const twilio = require('twilio');
const accountSid = "AC39b0e2a636f9cb6eaeadd9b60d4f32dd";
const authToken = "1c43f9fe78c898b109cdd7f67b386e15";
const client = require("twilio")(accountSid, authToken);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const user_date = prompt("When do you want your appointment?")

client.messages.create({ body: "You will have your appointment at " + user_date, from: "+18887203518", to: "+14085992835" }).then(message => console.log(message.sid));


