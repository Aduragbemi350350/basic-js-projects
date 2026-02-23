
//create a name reversal
function nameReverser(name) {
    const studentName = name

    //get student name length
    const nameLength = studentName.length

    //name array
    let nameCharList = []

    for (let i = 0; i < nameLength; i++) {
        nameCharList.push(studentName[i])
    }

    const reversedChar = nameCharList.reverse()

    //reversed name
    let reversedName = ''

    reversedChar.forEach((char) => {
        reversedName += char
    })

    return reversedName
}

const stringReverser = (string) => {
    //length of the string
    let stringLength = string.length
    //reverse form of the string
    let reversedString = ""
    //loop through the string
    for (let i = (stringLength - 1); i >= 0; i--) { reversedString += string[i] }
    return reversedString
}


const reversedName = nameReverser("Soladoye Aduragbemi")

console.log({
    mess: "Reverse string",
    reversedString: stringReverser("Soladoye Oluwasegun Aduragbemi")
})