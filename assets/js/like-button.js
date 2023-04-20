// // Get the like button and like count elements
// const likeButton = document.querySelector('.like-button');
// const likeCount = document.querySelector('.like-count');

// // Initialize the like count to 0
// let count = 0;

// // Add a click event listener to the like button
// likeButton.addEventListener('click', () => {
//   // Increment the count and update the like count element
//   count++;
//   likeCount.textContent = count;

//   // Disable the button to prevent multiple clicks
// //   likeButton.disabled = true;
// });

// const likeButton = document.querySelector('.like-button');
// const likeCount = document.querySelector('.like-count');

// let count = 0;

// likeButton.addEventListener('click', () => {
//   if (!likeButton.disabled) {
//     count++;
//     likeCount.textContent = count;
//     likeButton.disabled = true;
//   }
// });


// const likeButton = document.querySelector('.like-button');
// const likeCount = document.querySelector('.like-count');

// // Check if the user has already liked the content
// if (document.cookie.includes('liked=true')) {
//   likeButton.disabled = true;
// }

// likeButton.addEventListener('click', () => {
//   // Check if the user has already liked the content
//   if (document.cookie.includes('liked=true')) {
//     return;
//   }

//   // Increment the count and update the like count element
//   let count = parseInt(likeCount.textContent);
//   count++;
//   likeCount.textContent = count;

//   // Set a cookie to remember that the user has liked the content
//   document.cookie = 'liked=true';

//   // Disable the button to prevent multiple clicks
//   likeButton.disabled = true;
// });


// Get the like and dislike buttons and the count element
const likeButton = document.querySelector('.like-button');
const dislikeButton = document.querySelector('.dislike-button');
const likeCount = document.querySelector('.like-count');

// Initialize the count and state variables
let count = 0;
let liked = false;

// Add click event listeners to the buttons
likeButton.addEventListener('click', () => {
  if (!liked) {
    // Increment the count and update the like count element
    count++;
    likeCount.textContent = count;

    // Update the state variable and disable the buttons to prevent multiple clicks
    liked = true;
    likeButton.disabled = true;
    dislikeButton.disabled = true;
  } else {
    // Decrement the count and update the like count element
    count--;
    likeCount.textContent = count;

    // Update the state variable and enable the buttons
    liked = false;
    likeButton.disabled = false;
    dislikeButton.disabled = false;
  }
});

dislikeButton.addEventListener('click', () => {
  if (!liked) {
    // Decrement the count and update the like count element
    count--;
    likeCount.textContent = count;

    // Update the state variable and disable the buttons to prevent multiple clicks
    liked = true;
    likeButton.disabled = true;
    dislikeButton.disabled = true;
  } else {
    // Increment the count and update the like count element
    count++;
    likeCount.textContent = count;

    // Update the state variable and enable the buttons
    liked = false;
    likeButton.disabled = false;
    dislikeButton.disabled = false;
  }
});
