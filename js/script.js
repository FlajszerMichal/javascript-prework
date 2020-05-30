


var button_paper, button_rock, button_scissors, buttonTest;

buttonTest = document.getElementById('button-test');
buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
button_rock = document.getElementById('kamień');
button_rock.addEventListener('click', function(){ buttonClicked('kamień'); });
button_paper = document.getElementById('papier');
button_paper.addEventListener('click', function(){ buttonClicked('papier'); });
button_scissors = document.getElementById('nożyce');
button_scissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

/**
 * Describe this function...
 */
function buttonClicked(button_paper) {
  clearMessages();
  console.log(button_paper + ' został kliknięty');
}


  var argComputerMove, argMoveId, argPlayerMove, computerMove, playerInput, playerMove, randomNumber;

/**
 * Describe this function...
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**
 * Describe this function...
 */
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == argComputerMove) {
    printMessage('remis!');
  } else {
    printMessage('Przegrywasz :(');
  }
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}
playerMove = argButtonName;
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = argButtonName;
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
  clearMessages();
  console.log(button_paper + ' został kliknięty');
}
