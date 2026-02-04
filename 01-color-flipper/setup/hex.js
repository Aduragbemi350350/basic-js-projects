//hex possible values
const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

//HTML elements
const btn = document.getElementById('btn')
const colorName = document.getElementById('colorName')

//Function to change color
changeColor = () => {
    //generate random hex value
    const color = hexColorGen()
    // the style
    document.body.style.backgroundColor = color
    colorName.textContent = color
}

//Hex Color Generator
const hexColorGen = ()=>{
    let hex = "#"
    for (let i=0 ; i<6 ; i++){
        let value = hexArr[randomNumberGen(hexArr.length)]
        hex += value ;
    }
    return hex
}

//Random number generator
const randomNumberGen = (length)=>{
    return Math.floor(Math.random()*length)
}


btn.addEventListener('click', changeColor)