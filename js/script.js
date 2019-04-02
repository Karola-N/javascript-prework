var moveId, computerMove, playerMove, randomNumber, playerInput;
/**
function getMoveName(moveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + moveId);
    if (moveId == 1) {
        return 'kamień';
    } else if (moveId == 2) {
        return 'papier';
    } else if (moveId == 3) {
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu "' + moveId + '". Zakładam, że chodziło o "kamień".');
        return 'kamień';
    }
}

function displayResult(playerMove, computerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
    if (playerMove == 'kamień' && computerMove == 'nożyce') {
        printMessage('Wygrywasz!');
    } else if (playerMove == 'papier' && computerMove == 'kamień') {
        printMessage('Wygrywasz!');
    } else if (playerMove == 'nożyce' && computerMove == 'papier') {
        printMessage('Wygrywasz!');
    } else if (playerMove == computerMove) {
        printMessage('Remis.');
    } else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove + '.');
}
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
*/








var buttonName, buttonRock, buttonPaper, ButtonScissors;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
ButtonScissors = document.getElementById('button-scissors');

function buttonClicked(buttonName) {
    clearMessages();
    console.log(buttonName + ' został kliknięty');

    function getMoveName(moveId) {
        console.log('wywołano funkcję getMoveName z argumentem: ' + moveId);
        if (moveId == 1) {
            return 'kamień';
        } else if (moveId == 2) {
            return 'papier';
        } else {
            return 'nożyce';
        }
    }

    function displayResult(playerMove, computerMove) {
        console.log('wywołano funkcję displayResults z argumentami: ' + playerMove + ', ' + computerMove);
        if (playerMove == 'kamień' && computerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (playerMove == 'papier' && computerMove == 'kamień') {
            printMessage('Wygrywasz!');
        } else if (playerMove == 'nożyce' && computerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else if (playerMove == computerMove) {
            printMessage('Remis.');
        } else {
            printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove + '.');
    }
    playerMove = buttonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function() { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function() { buttonClicked('papier'); });
ButtonScissors.addEventListener('click', function() { buttonClicked('nożyce'); });