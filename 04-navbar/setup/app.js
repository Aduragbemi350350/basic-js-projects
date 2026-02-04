// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class


//HTML elements
const content = document.querySelector('.content')
const toggler = document.getElementById('toggler')


//create media query
const smallScreen = window.matchMedia("(max-width: 600px)")

//Event functions
//Toggle event
const toggleContent = (event) => {
    content.classList.toggle('content')
}
//media query event
const handleSmallScreen = (event) =>{
    if(event.matches){
        content.classList.add('content')
    }
}

handleSmallScreen(smallScreen)

//Events Listeners
//toggler click
toggler.addEventListener('click', toggleContent)
//media query change
smallScreen.addEventListener('change', handleSmallScreen)