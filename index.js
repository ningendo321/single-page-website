// Sticky Header
window.addEventListener("scroll", function(){
    var header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

// Intersection Observer
const observer = new IntersectionObserver(function(entries) {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    } )
})

const hiddenElements = document.querySelectorAll('.hidden')

hiddenElements.forEach((el)=>(observer.observe(el)))


// Navbar menu Visibility

const menuDiv = document.querySelector('.menu-div')
const burgerDiv = document.querySelector('.burger-div') 

burgerDiv.addEventListener("click", function(){

    menuDiv.classList.toggle('active') 
    
})