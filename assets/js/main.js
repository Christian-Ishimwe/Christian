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
    
    const header=document.getElementById('header')
    this.scrollY >=50 ? header.classList.add('shadow-header')
                    : header.classList.remove('shadow-header')
}


window.addEventListener('scroll', shadowHeader)

/*=============== EMAIL JS ===============*/

const contactForm=document.getElementById('contact-form'),
        contactMessage=document.getElementById('contact-message')

const sendEmail= (e) =>{
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm("service_sfx4lvv", "template_n1w2htm", "#contact-form", "z-dkJZvib4OfNEqn5")
    .then(() =>{
        contactMessage.textContent="Message sent successfully ✅"
        setTimeout(()=>{
            contactMessage.textContent=""
        }, 5000)
        contactForm.reset()
    }, () =>{
        contactMessage.textContent="Message not sent (service error) ❌"
        setTimeout(()=>{
            contactMessage.textContent=""
        }, 5000)
    })

   
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollBtn=document.getElementById('scroll-up')
// scrollBtn.addEventListener('click', () =>{
//     alert('hello')
// })

function  scrollUp(){
    let x=scrollY
    if(x>=800){
        scrollBtn.classList.add('scroll-up')
    }
    else{
        scrollBtn.classList.remove('scroll-up')
    }
}

window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections=document.querySelectorAll("section[id]")
// function activeLinks(){
//     const scrollDown=window.scrollY
//     sections.forEach( current =>{
//         const sectionHeight=current.offsetHeight,
//         sectionTop=current.offsetTop-58,
//         sectionId=current.getAttribute('id'),
//         sectionsClass=current.querySelector('.nav__menu a[href*=' + sectionId + ']')
//     console.log(sectionId)
//     console.log(scrollDown)
//     console.log(sectionTop)
//     if( scrollDown>sectionTop && scrollDown <= sectionTop + sectionHeight){
//         sectionsClass.classList.add('active-link')

//     }
//     else{
//         sectionsClass.classList.remove('active-link')
//     }
    
//     })
// }

// window.addEventListener('scroll', activeLinks)

/*=============== DARK LIGHT THEME ===============*/ 

const themeButton=document.getElementById('theme-button')
const darkTheme="dark-theme"
const iconTheme="ri-sun-line"

const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

const getCurrentTheme= () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon=() => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon==='ri-moon-line' ? 'add': 'remove'](iconTheme)
}


themeButton.addEventListener('click', () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
