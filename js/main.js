let inputNumber;
let randomNumber;
let numberOk;
let remainingAttempts;
let inputKeepPlaying;
let keepPlaying = true;

while(keepPlaying){
    randomNumber = Math.floor(Math.random() * 10);  // Genero el número a adivinar.
    console.log(randomNumber);
    inputNumber = prompt("Adiviná el número del 0 al 9, tenés 3 intentos! Ingresá un número del 0 al 9.");  // Input del usuario.
    numberOk = inputNumber >= 0 && inputNumber <= 9? true : false;  // Valido si el valor ingresado es correcto.

    while(!numberOk){   // Si el número ingresado fue incorrecto, le pido al usuario que ingrese otro hasta que lo haga correctamente
        inputNumber = prompt("Error! Ingresa un número del 0 al 9.");
        numberOk = inputNumber >= 0 && inputNumber <= 9? true : false;
    }
 
    for(let attemps = 0 ; attemps < 3 ; attemps++){    // Gestiono los tres intentos que tiene el usuario para acertar.
        if(inputNumber == randomNumber){    // El usuario acertó el número. le pregunto si quiere volver a jugar.
            inputKeepPlaying = prompt("Ganaste! Ingrese S para jugar nuevamente o cualquier otra tecla para salir.");       
            keepPlaying = inputKeepPlaying == "S" || inputKeepPlaying == "s"? true : false;
            break;
        }

        if(attemps == 2){   // Falló los tres intentos, le pregunto si quiere volver a jugar.
            inputKeepPlaying = prompt("Perdiste! Ingrese S para jugar nuevamente o cualquier otra tecla para salir.");       
            keepPlaying = inputKeepPlaying == "S" || inputKeepPlaying == "s"? true : false;
            break;
        } 

        // Le queda al menos un intento. Le pido que ingrese nuevamente un número.
        remainingAttempts = 2 - attemps;
        inputNumber = prompt("No acertaste! Te quedan " + remainingAttempts + " intentos. Ingresá un número del 0 al 9.");
        numberOk = inputNumber >= 0 && inputNumber <= 9? true : false;

        // Si el número ingresado fue incorrecto, le pido al usuario que ingrese otro hasta que lo haga correctamente
        while(!numberOk){   
            inputNumber = prompt("Error! Ingresa un número del 0 al 9.");
            numberOk = inputNumber >= 0 && inputNumber <= 9? true : false;
        }
    }
}