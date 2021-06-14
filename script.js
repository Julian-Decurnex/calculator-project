let pantalla = document.querySelector('.numeros');
let botones = document.querySelectorAll('.boton');

function realizarEcuacion() {
    let array = pantalla.textContent.split(' ');
    while (array.length > 1) {
        for (let i = 0; i < array.length; i++) {
            if (array.includes('/') || array.includes('*')) {
                if (typeof parseFloat(array[i]) === 'number') {
                    if (array[i+1] === '*') {
                        array[i] = (parseFloat(array[i]) * parseFloat(array[i+2])).toString();
                        array.splice(i+1, 2);
                    } else if (array[i+1] === '/') {
                        array[i] = (parseFloat(array[i]) / parseFloat(array[i+2])).toString();
                        array.splice(i+1, 2);
                    }
                }
            } else {
                if (typeof parseFloat(array[i]) === 'number') {
                    if (array[i+1] === '+') {
                        array[i] = (parseFloat(array[i]) + parseFloat(array[i+2])).toString();
                        array.splice(i+1, 2);
                    } else if (array[i+1] === '-') {
                        array[i] = (parseFloat(array[i]) - parseFloat(array[i+2])).toString();
                        array.splice(i+1, 2);
                    }
                }
            }
        }
    }
    return array[0]
}

let nuevaCuenta = 0;
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        if (boton.id === '🠔') {
            if (pantalla.textContent.length <= 1) {
                pantalla.textContent = '0';
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
        } else if (boton.id === 'C') {
            nuevaCuenta = 0;
            pantalla.textContent = '0';
        } else if (boton.id === '=') {
            nuevaCuenta = 1;
            pantalla.textContent = realizarEcuacion();
        } else if (pantalla.textContent.length < 22) {
             if (pantalla.textContent === '0' && nuevaCuenta === 0) {
                pantalla.textContent = boton.id;
            } else if (boton.id === '+' || boton.id === '-' || boton.id === '*' || boton.id === '/') {
                pantalla.textContent += ` ${boton.id} `;
            } else {
                pantalla.textContent += boton.id;
            }
        } else {
            alert('Number is too big!');
        }
    })
})

