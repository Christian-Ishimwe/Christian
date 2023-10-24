/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu')
const navToggle=document.getElementById('nav-toggle')
const navClose=document.getElementById('nav-close')
const navLinks=document.querySelectorAll('.nav__link')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('hello')
       
    })
}

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('hello')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
navLinks.forEach((element)=>{
    element.addEventListener('click', () =>{
        navMenu.classList.remove('hello')
    })
})

/*=============== SHADOW HEADER ===============*/

const shadowHeader= () =>{
    console.log(this.scrollY)
    const header=document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')
}


window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
