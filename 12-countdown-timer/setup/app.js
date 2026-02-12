const dateField = document.querySelectorAll('.date-field')
const countdownBtn = document.querySelector('.countdown-btn')
const dateElements = document.querySelectorAll('.date-element')




const render = ({ day, hr, min, sec }) => {

  // console.log({ day, hr, min, sec })
  //updating the DOM
  dateElements.forEach((element) => {
    if (element.dataset.id === "day") {
      element.textContent = day
    } else if (element.dataset.id === "hr") {
      element.textContent = hr
    } else if (element.dataset.id === "min") {
      element.textContent = min
    } else if (element.dataset.id === "sec") {
      element.textContent = sec
    }
  })
}


const inputValidator = ({ year, month, day, hr, min, sec }) => {
  //check year
  if (!(year >= new Date().getFullYear())) {
    console.log("Year mustn't be less than current year")
    alert("Year mustn't be less than current year")
    return
  }
  //check month
  if (!((month > 0) && (month <= 12))) {
    console.log("Month mustn't be less than 0 OR greater than 12")
    alert("Month mustn't be less than 0 OR greater than 12")
    return
  }
  //check day
  if (!((day > 0) && (day <= 31))) {
    console.log("Day mustn't be less than 0 OR greater than 31")
    alert("Day mustn't be less than 0 OR greater than 31")
    return
  }
  //check hr
  if (!((hr >= 0) && (hr <= 24))) {
    console.log("hour mustn't be less than 0 OR greater than 24")
    alert("hour mustn't be less than 0 OR greater than 24")
    return
  }
  //check min
  if (!((min >= 0) && (min <= 60))) {
    console.log("minute mustn't be less than 0 OR greater than 60")
    alert("minute mustn't be less than 0 OR greater than 60")
    return
  }
  //check sec
  if (!((sec >= 0) && (sec <= 60))) {
    console.log("second mustn't be less than 0 OR greater than 60")
    alert("second mustn't be less than 0 OR greater than 60")
    return
  }



  //carry on with operation
  //call start count down
  if (!year || !month || !day || !hr || !min || !sec) {
    console.log("All fields must be provided")
    alert("All fields must be provided")
    return
  }

  month--
  return startCountDown({ year, month, day, hr, min, sec })
}


const handleStartCountdown = () => {
  let dateProp = {}

  //get input values
  dateField.forEach((field) => {
    if (field.dataset.id === "day") {
      dateProp.day = Number(field.value)
    } else if (field.dataset.id === "hr") {
      dateProp.hr = Number(field.value)
    } else if (field.dataset.id === "min") {
      dateProp.min = Number(field.value)
    } else if (field.dataset.id === "sec") {
      dateProp.sec = Number(field.value)
    } else if (field.dataset.id === "year") {
      dateProp.year = Number(field.value)
    } else if (field.dataset.id === "month") {
      dateProp.month = Number(field.value)
    }
  })

  console.log(dateProp)
  inputValidator(dateProp)
}


//Initiate counter
const startCountDown = (dateProp) => {

  //render countdown
  const date = countdownCounter(dateProp)
  render(date)
  setInterval(() => {
    const date = countdownCounter(dateProp)

    const { day, hr, min, sec } = date
    if ((day === 0) && (hr === 0) && (min === 0) && (sec === 0)) return alert("Time up!")


    render(date)
  }, 1000)
}


//countdown initiator
const countdownCounter = (obj) => {
  const { year, month, day, hr, min, sec } = obj

  //get expiry date (time)
  const expiryDate = new Date(year, month, day, hr, min, sec)

  const currentDate = Date.now()

  const countdownDuration = +expiryDate - currentDate

  //time: day, hr, mins, sec
  const countDownTime = {
    day: Math.floor(countdownDuration / (1000 * 60 * 60 * 24)),
    hr: Math.floor((countdownDuration / (1000 * 60 * 60)) % 24),
    min: Math.floor((countdownDuration / (1000 * 60)) % 60),
    sec: Math.floor((countdownDuration / (1000)) % 60)
  }

  return countDownTime
}


countdownBtn.addEventListener('click', handleStartCountdown)
