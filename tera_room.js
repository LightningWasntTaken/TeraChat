var firebaseConfig = {
  apiKey: "AIzaSyDNVlGlHR6oYeFJKyBniw4NgZrsMUSFa38",
  authDomain: "practise-activity-c7d2c.firebaseapp.com",
  databaseURL: "https://practise-activity-c7d2c-default-rtdb.firebaseio.com",
  projectId: "practise-activity-c7d2c",
  storageBucket: "practise-activity-c7d2c.appspot.com",
  messagingSenderId: "988588423363",
  appId: "1:988588423363:web:2c3d8b3eea4db5eb368a76"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;



});});}
getData();

function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");

  window.location = "index.html";
}

function addRoom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "Adding room name"
  });
  localStorage.setItem("room_name" , room_name);
  window.location = "tera_chat.html";
}