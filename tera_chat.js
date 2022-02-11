var firebaseConfig = {
    apiKey: "AIzaSyDNVlGlHR6oYeFJKyBniw4NgZrsMUSFa38",
    authDomain: "practise-activity-c7d2c.firebaseapp.com",
    databaseURL: "https://practise-activity-c7d2c-default-rtdb.firebaseio.com",
    projectId: "practise-activity-c7d2c",
    storageBucket: "practise-activity-c7d2c.appspot.com",
    messagingSenderId: "988588423363",
    appId: "1:988588423363:web:2c3d8b3eea4db5eb368a76"
}
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


room_name_one = localStorage.getItem("room_name");
document.getElementById("room_name_div_one").innerHTML = "Room name: "+room_name_one;
var user_name = localStorage.getItem("user_name");
var room_name = localStorage.getItem("room_name");
function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            like: 0
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4>"+name+"<img class='user_tick'></h4>";
message_with_tag = "<h4 class='message_h4'>"+message+"</h4>";
like_button = "<button class='btn btn-primary' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag = "<span id='abcde'>Like: "+like+"</span></button><hr>";
row = name_with_tag + message_with_tag + like_button + span_with_tag;
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id) {
      console.log("Clicked on like button- " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes)+1;
      console.log(updated_likes);
      firebase.database().ref(room_name).child(message_id).update({
            like: updated_likes
      });
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
  
    window.location = "index.html";
}

