// Get the popup and the button that opens it
var popup = document.getElementById("popup");
var button = document.getElementsByTagName("button")[0];

// Function to open the popup
function openPopup() {
  popup.style.display = "block";
}

// Function to close the popup
function closePopup() {
  popup.style.display = "none";
}

// Close the popup when the user clicks outside of it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
