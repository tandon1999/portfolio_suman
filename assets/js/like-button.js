
const likeButton = document.querySelector('.like-button');
const likeIcon = document.querySelector('.like-icon');
const likeCount = document.querySelector('.like-count');
let count = 0;
let isLiked = false;

likeButton.addEventListener('click', () => {
  if (isLiked) {
    count--;
    likeCount.textContent = count;
    likeButton.classList.remove('liked');
    likeIcon.classList.remove('unlike-icon');
    likeIcon.classList.add('like-icon');
    isLiked = false;
  } else {
    count++;
    likeCount.textContent = count;
    likeButton.classList.add('liked');
    likeIcon.classList.remove('like-icon');
    likeIcon.classList.add('unlike-icon');
    isLiked = true;
  }
});

