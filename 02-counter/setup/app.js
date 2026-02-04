//HTML element
const btn = document.querySelectorAll(".btn")
const counterContent = document.getElementById('counter')

//counter
let counter = 0;

const changeCounter = (event) => {
    //take counter action (increase, decrease, or reset)
    const id = event.target.id
    if (id === "increase") {
        //increase by one
        counter++
        counterContent.textContent = counter
    } else if (id === "decrease") {
        //decrease by one
        counter--
        counterContent.textContent = counter
    } else if (id === "reset") {
        //reset
        counter = 0
        counterContent.textContent = counter
    }

    //change color of counter content
    if(counter > 0){
        counterContent.style.color = 'green'
    }else if(counter < 0){
        counterContent.style.color = 'red'
    }else{
        counterContent.style.color = 'black'
    }
}

btn.forEach((element) => {
    element.addEventListener("click", changeCounter)
})

