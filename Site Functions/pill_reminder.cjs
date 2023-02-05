const prompt = require('prompt-sync')();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//console.log("This is a test")


  var now = new Date();
  now.setHours(now.getHours() - 8)
  now.setDate(now.getDate())
  console.log(now)

  console.log("What time today do you need to take your medicaitons?");

  const hour = prompt("Enter Hour (0-24). 24 HOUR TIME ");
  const minutes = prompt("Enter Minutes (0-59) ");

  var pill_time = new Date();
  pill_time.setDate(pill_time.getDate())
  //console.log(pill_time);
  pill_time.setMinutes(minutes)
  //console.log(pill_time)
  pill_time.setHours(hour - 8)
  //console.log(pill_time)

  console.log(pill_time)
  console.log(now)

  time_diff = pill_time - now
  console.log(time_diff)

  function timesUp(){
    console.log("It's time to take your pills")
  }


  if (time_diff > 0){

    setTimeout(timesUp, time_diff)

  }
  else{
    timesUp
  }
