//pegar o form 
let form = document.getElementById('form');

//enviar esses dados, fazer um submit dos inputs, enviar os dados

form.addEventListener('submit', function (event) {

    //impedir o carregamento da pagina quando enviar os dados

    event.preventDefault();

    //pegar dados dos inputs

    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    //conta do imc

    let imc = (weight / (height * height)).toFixed(2);


    // para pegar o valor e alterar depois 

    let value = document.getElementById('value');

    let description = '';

    //tirar a classe hiden 

    document.getElementById('infos').classList.remove('hiden');

    if (imc < 18.5) {
        description = 'Cuidado, abaixo do peso';
    } else if (imc >= 18.5 && imc <= 25) {
        description = 'Você está no peso ideal';
    } else if (imc > 25 && imc <= 35) {
        description = 'cuidado, voce está com obesidade moderada';
    } else if (imc > 35 && imc <= 40) {
        description = 'cuidado, voce está com obesidade severa';
    } else {
        description = 'cuidado, voce esta com obesidade morbida';
    }

    imc = imc.replace('.', ',');

    value.textContent = imc;

    document.getElementById('description').textContent = description;

});