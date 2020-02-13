// Index:
const moreContact = document.getElementById('more-contact');
const contactInfo =document.getElementById('contact-info');
const contactArrow= document.getElementById('contact-arrow');
moreContact.addEventListener('click',()=>{
    contactInfo.classList.add('is-active');
})
contactArrow.addEventListener('click',()=>{
    contactInfo.classList.remove('is-active');
    fourInfo.classList.remove('is-active');
    console.log('hola');
})
const heroArrowUp = document.getElementById('hero-arrow-up');
const heroArrowDown = document.getElementById('hero-arrow-down');
var heroArrow=document.getElementsByClassName('hero-arrow');
const whoarewe=document.getElementById('whoarewe');
heroArrowUp.addEventListener('click',()=>{
   whoarewe.classList.add('is-active');
})
heroArrowDown.addEventListener('click',()=>{
   whoarewe.classList.remove('is-active');
})
const fourInfo = document.getElementById('post-four-info');
const moreContainer=document.getElementById('more-container');
const postFour = document.getElementById('post-four');
const fourArrow = document.getElementById('four-info-arrow');
const postList =document.getElementById('post-list');
postFour.addEventListener('click',()=>{
    fourInfo.classList.add('is-active');
        moreContainer.style.gridColumn="4 / -1";
        moreContainer.style.gridRow="4 / span 2";
        postList.style.gridTemplateRows="18vh 18vh 18vh 23vh 23vh";
})
fourArrow.addEventListener('click',()=>{
    fourInfo.classList.remove('is-active');
        moreContainer.style.gridColumn="6 / span 2";
        moreContainer.style.gridRow="4 / span 2";
        postList.style.gridTemplateRows="20vh 20vh 20vh 20vh 20vh";
})


