// methods for searching and filtering : some, find, findIndex, includes, every, indexOf
// methods for returning arrays that is a transforming of another array: map, filter, reduce, slice, concat, flat
// sorting: sort, reverse
// methods that transforms an array: splice, pop, push, shift, unshift





const age = [3, 5, 34, 6]
const name = ["Aduragbemi", "Samuel", "Olaotan"]
const students = [
    {
        id: 0,
        name: "Aduragbemi",
        age: 23
    },
    {
        id: 1,
        name: "Samuel",
        age: 2
    },
    {
        id: 2,
        name: "Olaotan",
        age: 45
    }
]


//  searching   //

//includes
const includesResult = age.includes("3")

//find
const findResult = students.find((student) => {
    return (student.age > 2)
})

//some
const someResult = students.some((student)=> student.age === 2)


//   filtering   //

//filter
const filterResult = students.filter((student) => {
    return (student.age > 2)
})

//slice
const sliceResult = students.slice(0, 2)


//   addition of arrays    //

//concat
const concatResult = students.concat(age)

//spead operator
const spreadResult = [...students, ...age]

//   sorting array: These methods mutate the array  //   

//sort
// const sortResult = students.sort((a, b) => a.age - b.age)  //ascending order

//reverse
// const reverseResult = students.reverse()


//    transform array : map(), reduce()

//reduce : Always remember that this method returns the last state of the accumulator
const reduceResult = students.reduce((accumulator, student) => {
    let child = []
    let teen = []
    let adult = []

    //check if student is a childe
    if ((student.age > 0) && (student.age <= 12)) {

        //check if accumulator has the child field
        if (!(accumulator.child)) {
            accumulator.child = child
        }

        child.push(student)
    } else if ((student.age > 12) && (student.age <= 19)) {

        //check if accumulator has the teen field
        if (!(accumulator.teen)) {
            accumulator.teen = teen
        }

        teen.push(student)
    } else {

        //check if accumulator has the child field
        if (!(accumulator.adult)) {
            accumulator.adult = adult
        }

        adult.push(student)
    }

    //consider age. Check student age, we have to create a property for the accumulator, add the property to the


    return accumulator
}, {})


console.log({
    mess: "Result of reduce operation",
    reduceResult
})


