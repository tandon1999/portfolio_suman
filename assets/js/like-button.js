// Get the like button and like count elements
const likeButton = document.querySelector('.like-button');
const likeCount = document.querySelector('.like-count');

// Initialize the like count to 0
let count = 0;

// Add a click event listener to the like button
likeButton.addEventListener('click', () => {
  // Increment the count and update the like count element
  count++;
  likeCount.textContent = count;

  // Disable the button to prevent multiple clicks
  likeButton.disabled = true;
});
