console.log("HELLO WORLD");
console.log('yo');
$("#hello").html('asfdlfj');

var firebaseConfig = {
  apiKey: "AIzaSyBVhQGGc-QattqPOa4jL6yfE8NxsKUp55I",
  authDomain: "healthgenie-be064.firebaseapp.com",
  projectId: "healthgenie-be064",
  storageBucket: "healthgenie-be064.appspot.com",
  messagingSenderId: "982085319771",
  appId: "1:982085319771:web:67b3697b2de2393292937e",
  measurementId: "G-NGFMTP42NK"
};
firebase.initializeApp(firebaseConfig);
console.log('firebase has been implemented successfully');
// TO DO
// implement chatGPT
// USE FIREBASE AND JQUERY FOR APP

// sign up user
function signUp(){
  console.log('signup incoming');
  email = $("#email").val();
  password = $("#password").val();
  firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function(){
      console.log('Email Verification has been sent');
    }).catch(function(error){
      console.error(error);
    });
  })
  .catch(function(error) {
    console.error(error);
  })
}
// sign out user
function signOut(){
  firebase.auth().signOut();
  console.log('User has been signed out');
}

// login user
function loginUser(){
  email = $("#loginemail").val();
  password = $("#loginpw").val();
  firebase.auth().signInWithEmailAndPassword(email,password);
  // if we are able login
  console.log("yay user was able to login here is login email",email);
  // checking if they are verified
  var user = firebase.auth().currentUser;
  if (user.emailVerified) {
    console.log("YAY email is verified ");
    // take them to app view
    window.location = "app.html";
  } else {
    console.log("Whoops looks like you are not verified you need to be verified to use our application");
    // take them to verify view
    window.location = "verify-email.html";

  }
}
