
////////////////////////////////////////////////from CI love maths
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName('button');

    for (button of buttons) {
    ////////////////////////////////////////////////////////////////    
        button.addEventListener('click', function() {
            if(this.getAttribute('data-type') === 'rock') {
                const ai = aiChoice()
                const result = rock(ai)

                if(result === 'win') {
                    let playerScore = parseInt(document.getElementById('player-points').textContent)
                    ++ playerScore
                    document.getElementById('player-points').innerHTML = playerScore
                } else if (result === 'loss') {
                    let aiScore = parseInt(document.getElementById('ai-points').textContent)
                    ++ aiScore
                    document.getElementById('ai-points').innerHTML = aiScore
                } else if (result === 'draw') {
                    let playerScore = parseInt(document.getElementById('player-points').textContent)
                    ++ playerScore
                    document.getElementById('player-points').innerHTML = playerScore
                    let aiScore = parseInt(document.getElementById('ai-points').textContent)
                    ++ aiScore
                    document.getElementById('ai-points').innerHTML = aiScore
                }
            }
        })
    }
})

function aiChoice(){
    const choice = Math.floor(Math.random() * 5)
    if (choice === 0) {
        document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
        return 'rock';
    } else if (choice === 1) {
        document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand"></i>'
        return 'paper';
    } else if (choice === 2) {
        document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
        return 'scissors'
    } else if (choice === 3) {
        document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-lizard"></i>'
        return 'lizard'
    } else if (choice === 4) {
        document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-spock"></i>'
        return 'spock'
    }
}

function rock(aiChoice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>'
    if(aiChoice === 'rock') {
        return 'draw'
    } else if (aiChoice === 'scissors' || aiChoice === 'lizard') {
        return 'win'
    } else if (aiChoice === 'paper' || aiChoice === 'spock') {
        return 'loss'
    }
}

function paper(aiChoice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand"></i>'
    if(aiChoice === 'paper') {
        return 'draw'
    } else if (aiChoice === 'rock' || aiChoice === 'spock') {
        return 'win'
    } else if (aiChoice === 'scissors' || aiChoice === 'lizard') {
        return 'loss'
    }
}

function scissors(aiChoice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>'
    if(aiChoice === 'scissors') {
        return 'draw'
    } else if (aiChoice === 'lizard' || aiChoice === 'paper') {
        return 'win'
    } else if (aiChoice === 'rock' || aiChoice === 'spock') {
        return 'loss'
    }
}

function lizard(aiChoice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-lizard"></i>'
    if(aiChoice === 'lizard') {
        return 'draw'
    } else if (aiChoice === 'spock' || aiChoice === 'paper') {
        return 'win'
    } else if (aiChoice === 'rock' || aiChoice === 'scissors') {
        return 'loss'
    }
}

function spock(aiChoice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-spock"></i>'
    if(aiChoice === 'spock') {
        return 'draw'
    } else if (aiChoice === 'scissors' || aiChoice === 'rock') {
        return 'win'
    } else if (aiChoice === 'paper' || aiChoice === 'lizard') {
        return 'loss'
    }
}


// a = aiChoice()

// console.log(spock(aiChoice()))