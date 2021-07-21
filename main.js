const hamburger = document.querySelector('.hamburger');


const navlist = document.querySelector('#navlist');

hamburger.addEventListener('click' , function(){
    navlist.classList.toggle('showMenu');

 
})





const Services = document.querySelector('#Services');

const serviceDiv = document.querySelector('.services');

const home = document.querySelector('.home');
const active=  document.querySelector('.active');
// showing service 
Services.addEventListener('click' , function(){
    home.style.display="none"
    serviceDiv.style.display='flex'
     teamMates.style.display='none'
        contact.style.display='none'
})



active.addEventListener('click' , function(){
    home.style.display="flex"
      contact.style.display='none'
    serviceDiv.style.display='none'
      teamMates.style.display='none'
    
})



const teamMates = document.querySelector('.teamMates');
const temaButton = document.querySelector('#temaButton');


temaButton.addEventListener('click' , function(){
      home.style.display="none"
      serviceDiv.style.display='none'
         contact.style.display='none'
      teamMates.style.display='flex'
           
})




const contact = document.querySelector(".contact");

const lastList = document.querySelector('.lastList');


lastList.addEventListener('click' , function (){
     home.style.display="none"
      serviceDiv.style.display='none'
            teamMates.style.display='none'
            contact.style.display='flex'
});