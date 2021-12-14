

// ##promise.race()
const first = new Promise((resolve, reject) => {
    setTimeout(resolve, 1001, 'first resolve')
})

const second = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'second resolve')
})

Promise.race([first, second]).then(result => console.log(result)) // second resolve

// ##promise.all()
Promise.all([first, second]).then(result => console.log(result)) // [ 'first resolve', 'second resolve' ]


// ##TypeError: undefined is not a promise
// const commonErrors = Promise((resolve, reject) => {
//     resolve('Test for errors')
// })
// commonErrors.then(res => console.log(res)).catch(err => console.log(err))


