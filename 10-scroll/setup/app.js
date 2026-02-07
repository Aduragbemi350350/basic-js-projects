// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links


const nav = document.querySelector('#nav')
const date = document.querySelector('#date')


//handle date
const currentDate = new Date()
const year = currentDate.getFullYear()

date.textContent = year

//nav dimension
const navDim = nav.getBoundingClientRect()
const navHeight = navDim.height

console.log({navHe: navHeight})

//state
let scrollDistance = 0

const setscrollDistance = (distance)=>{
    //set state to distance
    scrollDistance = distance
    
    //handle nav fixed state
    navFixed(navHeight, scrollDistance)
}

const navFixed = (navH, scrollD)=>{
    if(scrollD < navH){
        nav.classList.remove('fixed-nav')
    }else if(scrollD >= navH){
        nav.classList.add('fixed-nav')
    }
}

window.addEventListener("scroll", (e)=>{
    //calculate a particular number of pixels moved from the top of the document
    setscrollDistance(window.scrollY)

    console.log({distance: scrollDistance})
})

