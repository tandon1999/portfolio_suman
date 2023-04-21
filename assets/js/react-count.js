  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBfWIgAJhVi75QjMxwweJz6cj7SbKGtiPo",
    authDomain: "countlikes.firebaseapp.com",
    projectId: "countlikes",
    storageBucket: "countlikes.appspot.com",
    messagingSenderId: "322603217238",
    appId: "1:322603217238:web:997c31a5cea843548866f7",
    measurementId: "G-VV5X1LYF53"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



  // Get the like and love buttons
const likeButton = document.querySelector("#like-button");
const loveButton = document.querySelector("#love-button");

// Add event listeners to the buttons
likeButton.addEventListener("click", () => likeProject(2));
loveButton.addEventListener("click", () => loveProject(2));

// Set up a realtime listener for the project
database.collection("projects").doc("2")
  .onSnapshot((doc) => {
    // Get the current like and love counts
    const likes = doc.data().likes;
    const loves = doc.data().loves;
    // Update the like and love counts on the page
    document.querySelector("#like-count").textContent = likes;
    document.querySelector("#love-count").textContent = loves;
  });


  function likeProject(projectId) {
    // Get the current number of likes
    const likeCount = Number(document.querySelector("#project-" + projectId + "-likes").textContent);
    // Update the like count in the database
    database.collection("projects").doc(projectId.toString()).update({
      likes: likeCount + 1
    });
  }
  
  function loveProject(projectId) {
    // Get the current number of loves
    const loveCount = Number(document.querySelector("#project-" + projectId + "-loves").textContent);
    // Update the love count in the database
    database.collection("projects").doc(projectId.toString()).update({
      loves: loveCount + 1
    });
  }
  
  