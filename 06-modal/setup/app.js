// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay


//HTNL elements
const btn = document.querySelectorAll('.btn')
const subscribe = document.querySelector('.subscribe')

//functions
const handleSubscribe = (e) => {
    const action = e.currentTarget.classList
    if (action.contains('btn-subscribe')) {
        subscribe.classList.remove('view')
        document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"
        subscribe.style.backgroundColor = "white"
    }else if(action.contains('btn-rm-subscribe')){
        subscribe.classList.add('view')
        document.body.style.backgroundColor = "white"
    }
}

btn.forEach((btn)=>{
    btn.addEventListener('click', handleSubscribe)
})