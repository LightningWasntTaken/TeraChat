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

function addUser() {
    user_name_tera = document.getElementById("user_name_input").value;
    if(user_name_tera == ""){
        document.getElementById("user_name_input").placeholder = "Please enter your username";
    }
    else{
        localStorage.setItem("user_name" , user_name_tera);
    window.location = "tera_room.html";
    }
    firebase.database().ref("/").child(user_name_tera).update({
        purpose: "adding username"
    });
}

