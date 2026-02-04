// possible colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

//HTML elements
const btn = document.getElementById('btn')
const colorType = document.getElementById('colorName')

//Functions to change color
changeColor = () => {
    //generate random hex value
    const color = colors[randomNumberGen(colors.length)]
    // the style
    document.body.style.backgroundColor = color
    colorName.textContent = color
}

//Random number generator
const randomNumberGen = (length)=>{
    return Math.floor(Math.random()*length)
}


btn.addEventListener('click', changeColor)