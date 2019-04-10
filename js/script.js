const buttonRock = document.getElementById('button-rock'),
    buttonPaper = document.getElementById('button-paper'),
    buttonScissors = document.getElementById('button-scissors');

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

function buttonClicked(buttonName) {
    clearMessages();
    const randomNumber = Math.floor(Math.random() * 3 + 1),
        playerMove = buttonName,
        computerMove = getMoveName(randomNumber);

    console.log(buttonName + ' został kliknięty');
    console.log('ruch gracza to: ' + playerMove);
    console.log('wylosowana liczba to: ' + randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function() { buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function() { buttonClicked('papier'); });
buttonScissors.addEventListener('click', function() { buttonClicked('nożyce'); });