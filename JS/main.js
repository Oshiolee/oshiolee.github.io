//---- SHOW MENU ----//
const showMenu = (toggleId,navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

//---- REMOVE MENU MOBILE ----//
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//---- SCROLL SECTION ACTIVE LINK ----//
const sections = document.querySelectorAll('setion[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')          
        }
    })
}
window.addEventListener('scroll', scrollActive);

//---- CHANGE BACKGROUND HEADER ----//
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 200) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

//---- SHOW SCROLL TOP ----//
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollTop);

//----- LINK ACTIVE PORTFOLIO -----//


//----- GSAP ANIMATION -----//
gsap.from('.home_img', {opacity:0, duration:2, delay:.5, x:60})
gsap.from('.home_data', {opacity:0, durartion:2, delay:.8, y:25});
gsap.from('.home_greeting, .home_name, home_profession, .home_button', {opacity:0, durartion:2, delay:1, y:25, ease:'expo.out', stagger:.2});
    
gsap.from('.nav_logo, .nav_toggle', {opacity:0, durartion:2, delay:1.5, y:25, ease:'expo.out', stagger:.2});
gsap.from('.nav_item', {opacity:0, durartion:2, delay:.2, y:25, ease:'expo.out', stagger:0});
gsap.from('.home_social-icon', {opacity:0, durartion:2, delay:2.3, y:25, ease:'expo.out', stagger:.2});

//Form Submission
window.addEventListener("DOMContentLoaded", function () {

//Form Elements
var form = document.getElementById("my-form");
var status = document.getElementById("status");

//Success and Error Functions
function success() {
    status.classList.add('success');
    status.innerHTML = "Thanks!";
}

function error() {
    status.classList.add('error');
    status.innerHTML = "Oops! There was a problem.";
}

//Handle the form submission event
form.addEventListener("submit", function (ev) {
    ev.preventDefault();
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
    });
});

//Help Function for sending on AJAX request
function ajax(method, url, data, success, error) {
    var xhr
}