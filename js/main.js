const year = new Date().getFullYear();

document.getElementById('currentyear').innerHTML = year;

const noLikeOne = document.getElementById('nolike--1');
const likeOne = document.getElementById('like--1');

const noLikeTwo = document.getElementById('nolike--2');
const likeTwo = document.getElementById('like--2');

const noLikeThree = document.getElementById('nolike--3');
const likeThree = document.getElementById('like--3');

const noLikeFour = document.getElementById('nolike--4');
const likeFour = document.getElementById('like--4');

const noLikeFive = document.getElementById('nolike--5');
const likeFive = document.getElementById('like--5');

const noLikeSix = document.getElementById('nolike--6');
const likeSix = document.getElementById('like--6');


noLikeOne.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeOne.classList.add('hide');
    likeOne.classList.remove('hide');
});
likeOne.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeOne.classList.remove('hide');
    likeOne.classList.add('hide');
});

noLikeTwo.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeTwo.classList.add('hide');
    likeTwo.classList.remove('hide');
});
likeTwo.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeTwo.classList.remove('hide');
    likeTwo.classList.add('hide');
});

noLikeThree.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeThree.classList.add('hide');
    likeThree.classList.remove('hide');
});
likeThree.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeThree.classList.remove('hide');
    likeThree.classList.add('hide');
});

noLikeFour.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeFour.classList.add('hide');
    likeFour.classList.remove('hide');
});
likeFour.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeFour.classList.remove('hide');
    likeFour.classList.add('hide');
});

noLikeFive.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeFive.classList.add('hide');
    likeFive.classList.remove('hide');
});
likeFive.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeFive.classList.remove('hide');
    likeFive.classList.add('hide');
});

noLikeSix.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeSix.classList.add('hide');
    likeSix.classList.remove('hide');
});
likeSix.addEventListener('click', function(event) {
    event.preventDefault();
    noLikeSix.classList.remove('hide');
    likeSix.classList.add('hide');
});