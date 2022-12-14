// Wait for the DOM Content to load before executing the functions
// Add event listeners and functions to the buttons

// The code in the lines 5, 6 and 8 is taken from Code Institute Love Maths Project (https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/05-tidying-up/01-a-few-last-things/assets/js/script.js)  
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName('button');
    selectNameInput();
    for (let button of buttons) {
        //    End of the code taken from Code Institute Love Maths Project (https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/05-tidying-up/01-a-few-last-things/assets/js/script.js)
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'start') {
                document.getElementById('start-page').style.visibility = 'hidden';
                newGame();
                setPlayerName();
            } else if (this.getAttribute('data-type') === 'new-game') {
                document.getElementById('start-page').style.visibility = 'visible';
                selectNameInput();
            } else if (this.getAttribute('data-type') === 'rules') {
                document.getElementById('rules-section').style.visibility = 'visible';
                const closeButton = document.getElementsByClassName('close-button');
                for (let a of closeButton) {
                    a.addEventListener('click', function () {
                        document.getElementById('rules-section').style.visibility = 'hidden';
                    });
                }
            } else if (this.getAttribute('data-type') === 'rock') {
                const ai = aiChoice();
                const result = rock(ai);
                scoreCalculation(result);
            } else if (this.getAttribute('data-type') === 'paper') {
                const ai = aiChoice();
                const result = paper(ai);
                scoreCalculation(result);
            } else if (this.getAttribute('data-type') === 'scissors') {
                const ai = aiChoice();
                const result = scissors(ai);
                scoreCalculation(result);
            } else if (this.getAttribute('data-type') === 'lizard') {
                const ai = aiChoice();
                const result = lizard(ai);
                scoreCalculation(result);
            } else if (this.getAttribute('data-type') === 'spock') {
                const ai = aiChoice();
                const result = spock(ai);
                scoreCalculation(result);
            }
        });
    }
});

// Selects the text in the input and moves the cursor to the start of the input field
// Hides the visibility of the start section when Enter or Start button is pressed
function selectNameInput() {
    //The focus() and select() methods are taken from (https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select)
    document.getElementById('submitted-name').focus();
    document.getElementById('submitted-name').select();

    //The 'keydown' event listener syntax and the if condition are taken from Code Institute Love Maths project (https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/05-tidying-up/01-a-few-last-things/assets/js/script.js)
    document.getElementById('submitted-name').addEventListener('keydown', function (event) {
        if (event.key === "Enter" || event.key === "NumEnter") {
            document.getElementById('start-page').style.visibility = 'hidden';
            newGame();
            setPlayerName();
        }
    });
}

// Calculate the score in case of player win or loss
function scoreCalculation(result) {
    if (result === 'win') {
        let playerScore = parseInt(document.getElementById('player-points').textContent);
        ++playerScore;
        document.getElementById('player-points').innerHTML = playerScore;
    } else if (result === 'loss') {
        let aiScore = parseInt(document.getElementById('ai-points').textContent);
        ++aiScore;
        document.getElementById('ai-points').innerHTML = aiScore;
    }
}

// Return a random string relevant to the game choices 
function aiChoice() {
    const choice = Math.floor(Math.random() * 5);
    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else if (choice === 2) {
        return 'scissors';
    } else if (choice === 3) {
        return 'lizard';
    } else if (choice === 4) {
        return 'spock';
    }
}

// Display the computer choice 
function aiDisplayRock() {
    document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
    document.getElementById('ai-choice').style.color = '#574e43';
}

function aiDisplayPaper() {
    document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand"></i>';
    document.getElementById('ai-choice').style.color = '#ffa300';
}

function aiDisplayScissors() {
    document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
    document.getElementById('ai-choice').style.color = '#d80000';
}

function aiDisplayLizard() {
    document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-lizard"></i>';
    document.getElementById('ai-choice').style.color = '#227600';
}

function aiDisplaySpock() {
    document.getElementById('ai-choice').innerHTML = '<i class="fa-solid fa-hand-spock"></i>';
    document.getElementById('ai-choice').style.color = '#1167b1';
}

// Display the player choice and return a win/loss result depending on computer's choice
function rock(choice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-back-fist"></i>';
    document.getElementById('player-choice').style.color = '#574e43';
    let opponentMove = choice;

    while (opponentMove === 'rock') {
        opponentMove = aiChoice();
    }
    if (opponentMove === 'scissors') {
        aiDisplayScissors();
        return 'win';
    } else if (opponentMove === 'lizard') {
        aiDisplayLizard();
        return 'win';
    } else if (opponentMove === 'paper') {
        aiDisplayPaper();
        return 'loss';
    } else if (opponentMove === 'spock') {
        aiDisplaySpock();
        return 'loss';
    }

}

function paper(choice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand"></i>';
    document.getElementById('player-choice').style.color = '#ffa300';
    let opponentMove = choice;

    while (opponentMove === 'paper') {
        opponentMove = aiChoice();
    }
    if (opponentMove === 'rock') {
        aiDisplayRock();
        return 'win';
    } else if (opponentMove === 'spock') {
        aiDisplaySpock();
        return 'win';
    } else if (opponentMove === 'lizard') {
        aiDisplayLizard();
        return 'loss';
    } else if (opponentMove === 'scissors') {
        aiDisplayScissors();
        return 'loss';
    }
}

function scissors(choice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-scissors"></i>';
    document.getElementById('player-choice').style.color = '#d80000';

    let opponentMove = choice;

    while (opponentMove === 'scissors') {
        opponentMove = aiChoice();
    }
    if (opponentMove === 'paper') {
        aiDisplayPaper();
        return 'win';
    } else if (opponentMove === 'lizard') {
        aiDisplayLizard();
        return 'win';
    } else if (opponentMove === 'rock') {
        aiDisplayRock();
        return 'loss';
    } else if (opponentMove === 'spock') {
        aiDisplaySpock();
        return 'loss';
    }
}

function lizard(choice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-lizard"></i>';
    document.getElementById('player-choice').style.color = '#227600';

    let opponentMove = choice;

    while (opponentMove === 'lizard') {
        opponentMove = aiChoice();
    }
    if (opponentMove === 'paper') {
        aiDisplayPaper();
        return 'win';
    } else if (opponentMove === 'spock') {
        aiDisplaySpock();
        return 'win';
    } else if (opponentMove === 'rock') {
        aiDisplayRock();
        return 'loss';
    } else if (opponentMove === 'scissors') {
        aiDisplayScissors();
        return 'loss';
    }
}

function spock(choice) {
    document.getElementById('player-choice').innerHTML = '<i class="fa-solid fa-hand-spock"></i>';
    document.getElementById('player-choice').style.color = '#1167b1';
    let opponentMove = choice;

    while (opponentMove === 'spock') {
        opponentMove = aiChoice();
    }
    if (opponentMove === 'rock') {
        aiDisplayRock();
        return 'win';
    } else if (opponentMove === 'scissors') {
        aiDisplayScissors();
        return 'win';
    } else if (opponentMove === 'lizard') {
        aiDisplayLizard();
        return 'loss';
    } else if (opponentMove === 'paper') {
        aiDisplayPaper();
        return 'loss';
    }
}

// Set the player name on the scoreboard
function setPlayerName() {
    const playerName = document.getElementById('submitted-name').value;
    const gameName = document.getElementById('player-name');

    if (String(playerName) === '') gameName.innerHTML = '<h2>Anonymous</h2>';
    else  gameName.innerHTML =`<h2>${playerName}</h2>`;
}

// Reset the score and displayed icons 
function newGame() {
    document.getElementById('player-points').innerHTML = 0;
    document.getElementById('ai-points').innerHTML = 0;
    document.getElementById('player-choice').innerHTML = '';
    document.getElementById('ai-choice').innerHTML = '';
}