const { EventEmitter } = require('events')

const eventEmitter = new EventEmitter();

// console.log(eventEmitter)

/**
    once() : add a one-time listener
    removeListener() / off() : remove an event listener from an event
    removeAllListeners() : remove all listeners for an event
*/
eventEmitter.on('start', () => {
    console.log('started')
})
eventEmitter.emit('start') // start

eventEmitter.on('start', (num) => {
    console.log(`started ${num}`)
})
eventEmitter.emit('start', 26) // start 26


eventEmitter.on('start', (start, end) => {
    console.log(`started from ${start} to ${end}`)
})
eventEmitter.emit('start', 1, 100) // started from 1 to 100
    
// ## because of on(), can use once()
// started
// started
// started 26
// started
// started 1
// started from 1 to 100