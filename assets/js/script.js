////////////////////////////////////////////////from CI love maths
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName('button')

    for (let button of buttons) {
        ////////////////////////////////////////////////////////////////    
        button.addEventListener('click', function () {
            let difficulty = ''


            if (this.getAttribute('data-type') === 'start') {
                document.getElementById('start-page').style.visibility = 'hidden'
                newGame()
                setPlayerName()
            } else if (this.getAttribute('data-type') === 'easy') {
                document.getElementById('difficulty-section').style.visibility = 'hidden'
                difficulty = 'easy'
            } else if (this.getAttribute('data-type') === 'new-game') {
                newGame()
            } else if (this.getAttribute('data-type') === 'rules') {
                document.getElementById('rules-section').style.visibility = 'visible'
                const closeButton = document.getElementsByClassName('close-button')
                for (let a of closeButton) {
                    a.addEventListener('click', function () {
                        document.getElementById('rules-section').style.visibility = 'hidden'
                    })
                }
            } else if (this.getAttribute('data-type') === 'rock') {
                const ai = aiChoice()
                const result = rock(ai,difficulty)
                scoreCalculation(result)
            } else if (this.getAttribute('data-type') === 'paper') {
                const ai = aiChoice()
                const result = paper(ai)
                scoreCalculation(result)
            } else if (this.getAttribute('data-type') === 'scissors') {
                const ai = aiChoice()
                const result = scissors(ai)
                scoreCalculation(result)
            } else if (this.getAttribute('data-type') === 'lizard') {
                const ai = aiChoice()
                const result = lizard(ai)
                scoreCalculation(result)
            } else if (this.getAttribute('data-type') === 'spock') {
                const ai = aiChoice()
                const result = spock(ai)
                scoreCalculation(result)
            }
        })
    }
})

function scoreCalculation(result) {
    if (result === 'win') {
        let playerScore = parseInt(document.getElementById('player-points').textContent)
            ++playerScore
        document.getElementById('player-points').innerHTML = playerScore
    } else if (result === 'loss') {
        let aiScore = parseInt(document.getElementById('ai-points').textContent)
            ++aiScore
        document.getElementById('ai-points').innerHTML = aiScore
    } else if (result === 'draw') {
        let playerScore = parseInt(document.getElementById('player-points').textContent)
            ++playerScore
        document.getElementById('player-points').innerHTML = playerScore
        let aiScore = parseInt(document.getElementById('ai-points').textContent)
            ++aiScore
        document.getElementById('ai-points').innerHTML = aiScore
    }
}

function aiChoice() {
    const choice = Math.floor(Math.random() * 5)
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand"></i>'
        document.getElementById('ai-choice').style.color = '#ffa300'
        return 'paper';
    } else if (choice === 2) {
        document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
        document.getElementById('ai-choice').style.color = '#d80000'
        return 'scissors'
    } else if (choice === 3) {
        document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-lizard"></i>'
        document.getElementById('ai-choice').style.color = '#227600'
        return 'lizard'
    } else if (choice === 4) {
        document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-spock"></i>'
        document.getElementById('ai-choice').style.color = '#1167b1'
        return 'spock'
    }
}

function aiDisplayRock() {
    document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
    document.getElementById('ai-choice').style.color = '#574e43'
}

function rock(choice, difficulty) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
    document.getElementById('player-choice').style.color = '#574e43'
    //     if(aiChoice === 'rock') {
    //         return 'draw'
    //     } else if (aiChoice === 'scissors' || aiChoice === 'lizard') {
    //         return 'win'
    //     } else if (aiChoice === 'paper' || aiChoice === 'spock') {
    //         return 'loss'
    //     }
    let opponentMove = choice

    if (difficulty === 'easy') {
        while (opponentMove === 'rock' || opponentMove === 'paper') {
            opponentMove = aiChoice()
            console.log(opponentMove)
        }

        if (aiChoice === 'scissors' || aiChoice === 'lizard') {
            return 'win'
        } else if (aiChoice === 'spock') {
            return 'loss'
        }
    }
}

function paper(aiChoice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand"></i>'
    document.getElementById('player-choice').style.color = '#ffa300'
    if (aiChoice === 'paper') {
        return 'draw'
    } else if (aiChoice === 'rock' || aiChoice === 'spock') {
        return 'win'
    } else if (aiChoice === 'scissors' || aiChoice === 'lizard') {
        return 'loss'
    }
}

function scissors(aiChoice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
    document.getElementById('player-choice').style.color = '#d80000'
    if (aiChoice === 'scissors') {
        return 'draw'
    } else if (aiChoice === 'lizard' || aiChoice === 'paper') {
        return 'win'
    } else if (aiChoice === 'rock' || aiChoice === 'spock') {
        return 'loss'
    }
}

function lizard(aiChoice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-lizard"></i>'
    document.getElementById('player-choice').style.color = '#227600'
    if (aiChoice === 'lizard') {
        return 'draw'
    } else if (aiChoice === 'spock' || aiChoice === 'paper') {
        return 'win'
    } else if (aiChoice === 'rock' || aiChoice === 'scissors') {
        return 'loss'
    }
}

function spock(aiChoice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-spock"></i>'
    document.getElementById('player-choice').style.color = '#1167b1'
    if (aiChoice === 'spock') {
        return 'draw'
    } else if (aiChoice === 'scissors' || aiChoice === 'rock') {
        return 'win'
    } else if (aiChoice === 'paper' || aiChoice === 'lizard') {
        return 'loss'
    }
}

function setPlayerName() {
    const playerName = document.getElementById('submitted-name').value
    document.getElementById('player-name').innerHTML = `<h2>${playerName}</h2>`
}

function newGame() {
    document.getElementById('difficulty-section').style.visibility = 'visible'
    document.getElementById('player-points').innerHTML = 0
    document.getElementById('ai-points').innerHTML = 0
    document.getElementById('player-choice').innerHTML = ''
    document.getElementById('ai-choice').innerHTML = ''
}
let a = aiChoice()
rock(a, 'easy')