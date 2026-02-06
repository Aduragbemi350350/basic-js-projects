const questionTexts = document.querySelectorAll(".question-text")
const buttons = document.querySelectorAll(".question-btn")

//functions
const handleButtonClick = (e)=>{
  const activeButton = e.currentTarget

  const unActiveButton = Array.from(buttons).filter((btn)=> btn!= activeButton)

  //btn parent
  const parent = activeButton.closest('.question')

  //question text
  const questionText = parent.querySelector('.question-text')

  //remove display-question
  questionTexts.forEach((question)=>{
    question.classList.remove('display-question')
  })

  //add display-question
  questionText.classList.add('display-question')

  //console
  console.log({btnParent: parent, text: questionText})
}

//action: button
buttons.forEach((btn)=>{
  btn.addEventListener('click', handleButtonClick)
})