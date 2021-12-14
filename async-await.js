
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve('I did something'), 3000)
    })
}

//doSomethingAsync().then(res=>console.log("then res ",res))

const doSomething1 = async () => {
    const res = await doSomethingAsync()
    return res;
}
console.log(doSomething1()) // Promise { <pending> }


const doSomething2 = async () => {
    console.log(await doSomethingAsync())
}
doSomething2() // I did something

console.log("Do other things")
// Promise { <pending> }
// Do other things
// I did something


console.log('before')
doSomething2()
console.log('after')
// before
// after
// I did something


/*
    Prepending the "async" keyword to any function 
    means that the function will return a promise.
*/
const aFunction = async () => {
    return 'test a'
}
aFunction().then(res => console.log(res))

const bFunction = async () => {
    return Promise.resolve('test b')
}
bFunction().then(res => console.log(res))


/*
    The code is much simpler to read
*/
// promise way
const getFirstUserData = () => {
    return fetch('/users.json') // get users list
        .then(response => response.json()) // parse JSON
        .then(users => users[0]) // pick first user
        .then(user => fetch(`/users/${user.name}`)) // get user data
        .then(userResponse => response.json()) // parse JSON
}
getFirstUserData()

// async-await way
const getFirstUserData = async () => {
    const response = await fetch('/users.json') // get users list
    const users = await response.json() // parse JSON
    const user = users[0] // pick first user
    const userResponse = await fetch(`/users/${user.name}`) // get user data
    const userData = await user.json() // parse JSON
    return userData
}
getFirstUserData()


/*
    ##Multiple async functions in series
*/
const promiseToDoSomething = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 10000)
    })
}

const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    return something + ' and I watched'
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething()
    return something + ' and I watched as well'
}

watchOverSomeoneWatchingSomeoneDoingSomething().then((res) => {
    console.log(res) // I did something and I watched and I watched as well
})

// ##Easier debugging
    


    