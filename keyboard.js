/*
1. Generar un teclado funcional que muestre las letras clickeados en el cuadro de texto
2. Hacer un evento para cada boton que genere la letra
3. Usando for o while o cualquier recorrido vamos a asignar eventos a los botones
4. Usar la logica conocida para crear reglas a los botones especiales
    a) Boton de mayusculas, debe generar letras mayusculas los demas botones cuando este haya sido presionado
    b) Boton de borrar debe borrar el ultimo caracter
    c) El boton de espacio debe generar un espacio  
*/


//WRITING AREA METHOD
//this will select every element which the class 'btn'
const buttons = document.querySelectorAll('.btn');



//this will select the text area with textArea class
const textArea = document.querySelector('.textArea');


//takes the array of buttons and extracts each element called 'btn'
buttons.forEach(btn => {
    //the event that will trigger the action, is click
    btn.addEventListener('click', () => {
        //  adds' to the textArea, the innerText (<innerText>) of each btn element in the buttons array
        textArea.value += btn.innerText
        //split each element of the array so that the last element can be removed.
        textInfo = textArea.value.split('');
        console.log(textInfo)

    });
});

//SPECIAL CHARACTERS
let textInfo = []
const backspaceBtn = document.querySelector('.backspace');
const spaceBtn = document.querySelector('.space');
const uppercaseBtn = document.querySelector('.uppercase');

backspaceBtn.addEventListener('click', () => {
    //deletes the last array element
    textInfo.pop()
    textArea.value = textInfo.join('')
});

spaceBtn.addEventListener('click', () => {
    //adds ' '
    textInfo.push(' ')
    //transforms an array into text, the opposite of split
    textArea.value = textInfo.join('')
});

//transforms the lowercase letter buttons, into uppercases
uppercaseBtn.addEventListener('click', () => {
    buttons.forEach(btn => {
    btn.classList.toggle('upper');
    });
});





// for (let i = 0; i <= buttons.length; i++) {
//     const btn = buttons[i].addEventListener('click');
//     textArea.value += btn.innerText
    

// }



// function teclear(evento) {
//     let boton = evento.target.innerHTM;;
//     let arreglo = document.querySelectorAll('button')


//     if (arreglo.addEventListener('click')) {
//         for (let i = 0; i <= arreglo.length; i++) {
//             const element = arreglo[i].addEventListener();
//         }

//     }


// }


// document.getElementById('1').addEventListener('click', teclear)
// document.getElementById('q').addEventListener('click', teclear)

