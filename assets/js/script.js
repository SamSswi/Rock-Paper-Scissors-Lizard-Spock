////////////////////////////////////////////////from CI love maths
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName('button')

    for (let button of buttons) {
        ////////////////////////////////////////////////////////////////    
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'start') {
                document.getElementById('start-page').style.visibility = 'hidden'
                newGame()
                setPlayerName()
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
                const result = rock(ai)
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
        return 'paper';
    } else if (choice === 2) {
        return 'scissors'
    } else if (choice === 3) {
        return 'lizard'
    } else if (choice === 4) {
        return 'spock'
    }
}

function aiDisplayRock() {
    document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
    document.getElementById('ai-choice').style.color = '#574e43'
}

function aiDisplayPaper() {
    document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand"></i>'
    document.getElementById('ai-choice').style.color = '#ffa300'
}

function aiDisplayScissors() {
    document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
    document.getElementById('ai-choice').style.color = '#d80000'
}

function aiDisplayLizard() {
    document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-lizard"></i>'
    document.getElementById('ai-choice').style.color = '#227600'
}

function aiDisplaySpock() {
    document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-spock"></i>'
    document.getElementById('ai-choice').style.color = '#1167b1'
}

function rock(choice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
    document.getElementById('player-choice').style.color = '#574e43'
    let opponentMove = choice

    while (opponentMove === 'rock') {
        opponentMove = aiChoice()
    }
    if (opponentMove === 'scissors') {
        aiDisplayScissors()
        return 'win'
    } else if (opponentMove === 'lizard') {
        aiDisplayLizard()
        return 'win'
    } else if (opponentMove === 'paper') {
        aiDisplayPaper()
        return 'loss'
    } else if (opponentMove === 'spock') {
        aiDisplaySpock()
        return 'loss'
    }

}

function paper(choice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand"></i>'
    document.getElementById('player-choice').style.color = '#ffa300'
    let opponentMove = choice

    while (opponentMove === 'paper') {
        opponentMove = aiChoice()
    }
    if (opponentMove === 'rock') {
        aiDisplayRock()
        return 'win'
    } else if (opponentMove === 'spock') {
        aiDisplaySpock()
        return 'win'
    } else if (opponentMove === 'lizard') {
        aiDisplayLizard()
        return 'loss'
    } else if (opponentMove === 'scissors') {
        aiDisplayScissors()
        return 'loss'
    }
}

function scissors(choice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
    document.getElementById('player-choice').style.color = '#d80000'
    
    let opponentMove = choice

    while (opponentMove === 'scissors') {
        opponentMove = aiChoice()
    }
    if (opponentMove === 'paper') {
        aiDisplayPaper()
        return 'win'
    } else if (opponentMove === 'lizard') {
        aiDisplayLizard()
        return 'win'
    } else if (opponentMove === 'rock') {
        aiDisplayRock()
        return 'loss'
    } else if (opponentMove === 'spock') {
        aiDisplaySpock()
        return 'loss'
    }
}

function lizard(choice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-lizard"></i>'
    document.getElementById('player-choice').style.color = '#227600'

    let opponentMove = choice

    while (opponentMove === 'lizard') {
        opponentMove = aiChoice()
    }
    if (opponentMove === 'paper') {
        aiDisplayPaper()
        return 'win'
    } else if (opponentMove === 'spock') {
        aiDisplaySpock()
        return 'win'
    } else if (opponentMove === 'rock') {
        aiDisplayRock()
        return 'loss'
    } else if (opponentMove === 'scissors') {
        aiDisplayScissors()
        return 'loss'
    }
}

function spock(choice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-spock"></i>'
    document.getElementById('player-choice').style.color = '#1167b1'
    let opponentMove = choice

    while (opponentMove === 'spock') {
        opponentMove = aiChoice()
    }
    if (opponentMove === 'rock') {
        aiDisplayRock()
        return 'win'
    } else if (opponentMove === 'scissors') {
        aiDisplayScissors()
        return 'win'
    } else if (opponentMove === 'lizard') {
        aiDisplayLizard()
        return 'loss'
    } else if (opponentMove === 'paper') {
        aiDisplayPaper()
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