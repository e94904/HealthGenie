const prompt = require('prompt-sync')();
const twilio = require('twilio');
const accountSid = "AC39b0e2a636f9cb6eaeadd9b60d4f32dd";
const authToken = "20d366e310d31c1eaf3be5e4e5bef3cf";
const client = require("twilio")(accountSid, authToken);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//console.log("This is a test")


  var now = new Date();
  now.setHours(now.getHours())
  now.setDate(now.getDate())
  console.log(now)

  console.log("What time today do you need to take your medicaitons?");

  const hour = prompt("Enter Hour (0-24). 24 HOUR TIME ");
  const minutes = prompt("Enter Minutes (0-59) ");

  //const msTotal = (hour * )

  var pill_time = new Date();
  pill_time.setDate(pill_time.getDate())
  pill_time.setHours(hour, minutes, 0)
  //pill_time.toLocaleString('en-US', {timeZone: 'US/Pacific'})
  console.log("PILL TIME")
  console.log(pill_time)
  console.log("NOW")
  console.log(now)

  time_diff = pill_time - now
  console.log(time_diff)

  function timesUp(){
    console.log("It's time to take your pills");
    
    client.messages
    .create({ body: "Time to take your pills", from: "+18887203518", to: "+14085992835" })
    .then(message => console.log(message.sid));
  }

  if (time_diff > 0){
    setTimeout(() => timesUp(), time_diff)
  }
  else{
    timesUp()
  }

