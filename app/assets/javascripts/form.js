const connectContainer = document.querySelector('.connect-container');
const getQuote = document.querySelector('.get-quote-container');
const getInTouch = document.querySelector('.get-in-touch-container');

connectContainer.addEventListener('click', function(event){
  let target = event.target;

  if(target.textContent == "GET QUOTE"){
    getInTouch.style.display = "none";
    getQuote.style.display = "block";
    target.classList.add('selected');
    target.nextElementSibling.classList.remove('selected');
  }

  if(target.textContent == "GET IN TOUCH"){
    getQuote.style.display = "none";
    getInTouch.style.display = "block";
    target.classList.add('selected');
    target.previousElementSibling.classList.remove('selected');
  }
});

