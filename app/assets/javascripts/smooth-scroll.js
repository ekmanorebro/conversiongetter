const getQuoteBtns = document.querySelectorAll('.quote-btn');
const buttonContainer = document.querySelector('.button-container');
const getQuoteBtn = buttonContainer.children[0];
const getInTouchBtn = buttonContainer.children[1];
const auditBtn = document.querySelector('.audit-btn');
const getQuoteContainer = document.querySelector('.get-quote-container');
const getInTouchContainer = document.querySelector('.get-in-touch-container');
const servicesLink = document.querySelector('#services-link');
const services = document.querySelector('#services');
const contactLink = document.querySelector('#contact-link');
const contact = document.querySelector('#contact');

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

}

auditBtn.addEventListener('click', function(){

      if(getInTouchBtn.classList.contains('selected')){
        
      } else {  
        getQuoteBtn.classList.remove('selected');
        getInTouchBtn.classList.add('selected');
        getQuoteContainer.style.display = "none";
        getInTouchContainer.style.display = "block";
      }

      document.querySelector('#select-2').options.selectedIndex = 2;

      scrollTo(contact);

});


servicesLink.addEventListener('click', function(){
  scrollTo(services);
});

contactLink.addEventListener('click', function(){
  scrollTo(contact);
});



