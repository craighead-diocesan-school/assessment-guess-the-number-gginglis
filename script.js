let noOfAttempts

let userName

let users = [
    { name: 'g', score: '1' },
    { name: 'andra', score: '14' },
]

function guessTheNumber() {
    let noOfAttempts = 0
    // starts the count of the number of the attempts at 0
    let numberGuessed = false
    // the number is not guessed yet so its false
    let userName = prompt('whats your name')
    // to get the name from the user for the scoreboard
    let compChoice = Math.floor(Math.random() * (21 - 1) + 1);
    // randomises the options from the array to pick a number from 1-20
    alert(compChoice)
    while (numberGuessed == false) {
        // this code will run while the number hasnt been guessed
        let userGuess = prompt('pick a number')
        //asking the user to pick a number
        userGuess = Number(userGuess)
        // telling the computer that the users input is a number
        noOfAttempts = noOfAttempts + 1
        // adding 1 to the number of attempts


        if (userGuess <= 20 && userGuess >= 1) {
            // so the user cant enter a number above 20 as their guess
            if (userGuess == compChoice) {
                // if the users number matches the computers
                if (noOfAttempts == 1) {
                    alert('hacker bro only 1 try')
                    // this code runs if they get the number on their first go
                }
                else if (noOfAttempts > 1 && noOfAttempts < 20) {
                    alert('jeez only took you ' + noOfAttempts + ' tries')
                    // this code runs if it takes the user between 1 and 20 tries
                }
                else if (noOfAttempts == 20) {
                    alert('damnn you lucky took 20 tries')
                    // this code runs if the user got it on their last guess
                }
                else {
                    alert('bro what is wrong with you ' + noOfAttempts + ' guesses')
                    alert('how')
                    // this code runs if it takes them more than 20 goes because wth
                }
                numberGuessed = true
                // changes boolean value to true, so the loop stops

            }
        }
        else {
            alert('between 1 and 20 you wombat')
            alert('can you even read')
            // tells the user if their input was outside the range
        }
    }
    let user = {
        name: userName,
        score: noOfAttempts,
    }
    users.push(user)
}

function scoreboard() {
    for (let user of users) {
        alert(user.name + ', ' + user.score)
    }
}