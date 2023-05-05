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
        if(isNaN(result)) {
            display.textContent = 'Felaktig inmatning';
            } else {
            display.textContent = result;
        }
    } else if (knappValue === 'x') {
        display.textContent += '*';
      } else if (knappValue === '÷') {
        display.textContent += '/';
      } else if (knappValue === '(') {
        display.textContent += '(';
      } else if (knappValue === ')') {
        display.textContent += ')';
      } else if (knappValue === ',') {
        display.textContent += ',';
      }
      else {
        display.textContent += knappValue;
      }
    });
});