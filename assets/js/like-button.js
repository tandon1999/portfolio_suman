


// Get all the like and love buttons on the page
const buttons = document.querySelectorAll('.like-button, .love-button');

// Loop through each button and add a click event listener
buttons.forEach(button => {
  // Add a click event listener to the button
  button.addEventListener('click', () => {
    // Get the current number of likes or loves
    const count = button.querySelector('.like-count, .love-count');
    let currentCount = Number(count.textContent);
    // Check if the button has been liked or loved before
    const isLikedOrLoved = button.classList.contains('liked');
    // If the button is already liked or loved, remove the "liked" class and decrement the count
    if (isLikedOrLoved) {
      button.classList.remove('liked');
      currentCount--;
    }
    // If the button hasn't been liked or loved, add the "liked" class and increment the count
    else {
      button.classList.add('liked');
      currentCount++;
    }
    // Update the count on the button
    count.textContent = currentCount;
  });
});
