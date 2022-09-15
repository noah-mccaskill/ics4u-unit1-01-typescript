/**
 * The program calculates how may logs can fit on a truck
 *    depending on the length of the log.
 *
 * By:      Noah McCaskill
 * Version: 1.0
 * Since:   2022-09-15
 */


import promptSync from 'prompt-sync'

const prompt = promptSync()

const weight = 1100

const quantity = 20

const userInput = prompt('Enter a log length (0.25 m, 0.5 m, 1m):')


const logLength = parseFloat(userInput)
const maxLogs = weight / (quantity * logLength)

console.log(`\nThe truck is able to hold up to this number of logs: ${maxLogs}`)

console.log('\nDone.')
