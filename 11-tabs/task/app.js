const btns = document.querySelectorAll('.tab-btn')
const contents = document.querySelectorAll('.content')


const traverser = (element, parentName, target) => {
    //get parent
    const parent = element.closest(`.${parentName}`)
    //get target content
    const content = parent.querySelector(`#${target}`)

    //remove active element from all contents
    contents.forEach((content)=>{
        content.classList.remove('active')
    })

    //make current target active
    content.classList.add('active')

    //console
    console.log({
        mess: "The click button name",
        content
    })
}

const handleBtn = (e) => {
    const btn = e.currentTarget
    console.log({
        mess: "The click button name",
        btn
    })

    //call trasversal
    const parent = "about"
    traverser(btn, parent, btn.dataset.id)
}

btns.forEach((btn) => {
    btn.addEventListener("click", handleBtn)
})