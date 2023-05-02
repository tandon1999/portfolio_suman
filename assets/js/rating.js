


// Initialize Firebase

var firebaseConfig = {
  apiKey: "AIzaSyDITQZQ_Hse2ynWZE9fQBuxl9U4pFKOtwA",
  authDomain: "rating-1336a.firebaseapp.com",
  databaseURL: "https://rating-1336a-default-rtdb.firebaseio.com",
  projectId: "rating-1336a",
  storageBucket: "rating-1336a.appspot.com",
  messagingSenderId: "665805130983",
  appId: "1:665805130983:web:3caf4e8c180988e92f6642",
  measurementId: "G-VP17V8RD33"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the ratings collection in Firebase
  var ratingsRef = firebase.firestore().collection("ratingsuman");
  
 // Add the rating to Firebase
console.log("Adding rating:", ratingsuman);
ratingsRef.add({
  value: rating
})
.then(function() {
  // Show a success message
  console.log("Rating added successfully!");
  status.innerText = "Thank you for rating this portfolio!";
  status.style.color = "#45ba52";
})
.catch(function(error) {
  // Show an error message
  console.error("Error adding rating:", error);
  status.innerText = "An error occurred. Please try again later.";
  status.style.color = "#ff4136";
});
