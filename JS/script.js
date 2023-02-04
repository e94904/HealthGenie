console.log("HELLO WORLD");

$("#hello").html('hi');

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

function signUp(){
  console.log('signup incoming');
  email = $("#email").val();
  password = $("#password").val();
  firebase.auth().createUserWithEmailAndPassword(email,password).catch(function(error){
    console.log(error);
  });

}
