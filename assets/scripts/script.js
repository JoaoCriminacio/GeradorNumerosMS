let inputElement = document.getElementById('qtdNumeros');
let ulElement = document.getElementById('numeros');

function geradorNumeros () {
    let num = Number(inputElement.value); 
    let listaNumeros = [];

    if (num < 6 || num > 9){
        alert('Número Inválido! Deve-se informar um número entre 6 e 9!');
        listaNumeros = [];
        ulElement.innerHTML = '';
        inputElement.value = '';
        return listaNumeros;
    } else {
        ulElement.innerHTML = '';
        inputElement.value = '';

        while (listaNumeros.length < num) {
            const numeroAleatorio = Math.floor(Math.random() * 60) + 1;

            if (!listaNumeros.includes(numeroAleatorio)) {
               listaNumeros.push(numeroAleatorio);
            }
        }

        listaNumeros.map((item) => {
            let liElement = document.createElement('li');
            let liNumber = document.createTextNode(item);
            liElement.appendChild(liNumber);

            ulElement.appendChild(liElement);
        });
    
        return listaNumeros;
    }
}

document.getElementById('btn').addEventListener('click', geradorNumeros);