let kalkylator = document.querySelector('.kalkylator');

let display = kalkylator.querySelector('.display');;

let knappar = kalkylator.querySelectorAll('.knapp')

knappar.forEach(knapp => {
    knapp.addEventListener('click', () => { 
        const knappValue = knapp.textContent;    
        if (knappValue === 'C') {
            display.textContent = '';
        }
        else if (knappValue === '=') {
            const expression = display.textContent;
            const result = eval(expression);
            display.textContent = result;
        }
        else {
            display.textContent += knappValue;
        }
    });
});