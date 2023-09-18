// INITIALLIZING STRICT MODE 
'use strict';

//COLLECTION OF DOM STRINGS
const navOpen = document.querySelector('.header__hamburger--open');
const navClose = document.querySelector('.header__hamburger--close');
const navBox = document.querySelector('.header__nav');
const modal = document.querySelector('.modal');





// ADDING EVENT LISTERNERS TO THE NAVIGATION OPEN

const navOpenFunc = function(){
    navOpen.addEventListener('click', () => {
        navBox.style.top = 100 + "%";
        navOpen.style.display = 'none';
        navClose.style.display = 'block';
        modal.style.opacity = '0.20';
        modal.style.display = 'inline-block';
        
    });
}

navOpenFunc();

const navCloseFunc = function() {

    navClose.addEventListener('click', () => {
        navBox.style.top = -500 + "%";
        navClose.style.display = 'none';
        navOpen.style.display = 'block';
        modal.style.opacity = '0';
        modal.style.display = 'none';
    });    

}

navCloseFunc();

