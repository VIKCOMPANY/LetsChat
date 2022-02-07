
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDm0STZx-f9M4RqVNeDmi5BmTlh7IxAJRM",
      authDomain: "kwitter-2e245.firebaseapp.com",
      databaseURL: "https://kwitter-2e245-default-rtdb.firebaseio.com",
      projectId: "kwitter-2e245",
      storageBucket: "kwitter-2e245.appspot.com",
      messagingSenderId: "447057778019",
      appId: "1:447057778019:web:d7fffd2ee64c979edbef56",
      measurementId: "G-GKHWLFVN5L"
    };
    
    // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   user_name= localStorage.getItem("user_name");
   document.getElementById ("user_name").innerHTML="Welcome "+ user_name + "!" ;
   function addroom(){
         room_name= document.getElementById("room_name").value ;
firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
});
localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
   }
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name",name);
window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}