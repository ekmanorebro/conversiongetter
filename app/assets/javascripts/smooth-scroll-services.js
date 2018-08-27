const getQuoteBtns = document.querySelectorAll('.quote-btn');
const buttonContainer = document.querySelector('.button-container');
const getQuoteBtn = buttonContainer.children[0];
const getInTouchBtn = buttonContainer.children[1];
const getQuoteContainer = document.querySelector('.get-quote-container');
const getInTouchContainer = document.querySelector('.get-in-touch-container');
const ourProcessBtn = document.querySelector('.our-process-btn')
const ourProcess = document.querySelector('#our-process');
const contactLink = document.querySelector('#contact-link');

function scrollTo(element){
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  });
};


for(let i = 0; i < getQuoteBtns.length; i++){

  getQuoteBtns[i].addEventListener('click', function(){

      if(getQuoteBtn.classList.contains('selected')){
        
      } else {
        getInTouchBtn.classList.remove('selected');
        getQuoteBtn.classList.add('selected');
        getInTouchContainer.style.display = "none";
        getQuoteContainer.style.display = "block";
      }

      scrollTo(contact);
  });


};


ourProcessBtn.addEventListener('click', function(){
  scrollTo(ourProcess);
});

contactLink.addEventListener('click', function(){
  scrollTo(contact);
});