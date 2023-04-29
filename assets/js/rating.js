


// Initialize Firebase

var firebaseConfig = {
    apiKey: "AIzaSyB_0EYkI9ooK51euhCuWb586HxYzZoB4WQ",
    authDomain: "ratings-1b61a.firebaseapp.com",
    projectId: "ratings-1b61a",
    storageBucket: "ratings-1b61a.appspot.com",
    messagingSenderId: "112433411968",
    appId: "1:112433411968:web:a1a302af60d301d0ca3365",
    measurementId: "G-ZM5KY7YQ4S"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the ratings collection in Firebase
  var ratingsRef = firebase.firestore().collection("ratings");
  
  // Get references to the HTML elements
  var stars = document.querySelectorAll(".star");
  var status = document.querySelector(".status");
  
  // Set the default rating to 0
  var rating = 0;
  
  // Add a click event listener to each star
  stars.forEach(function(star) {
    star.addEventListener("click", function() {
      // Get the rating value from the star
      rating = parseInt(this.getAttribute("data-value"));
  
      // Set the active class on the clicked star and all previous stars
      stars.forEach(function(s, i) {
        if (i < rating) {
          s.classList.add("active");
        } else {
          s.classList.remove("active");
        }
      });
    });
  });
  
  // Add a submit event listener to the form
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Add the rating to Firebase
    ratingsRef.add({
      value: rating
    })
    .then(function() {
      // Show a success message
      status.innerText = "Thank you for rating this portfolio!";
      status.style.color = "#45ba52";
    })
    .catch(function(error) {
      // Show an error message
      status.innerText = "An error occurred. Please try again later.";
      status.style.color = "#ff4136";
      console.error(error);
    });
  });
  