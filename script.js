const button = document.querySelector('.convert-button');
const inputCurrency = document.querySelector('#input-money');
const selectRadioFrom = document.querySelectorAll('input[name="radio-from"]');
const selectRadioFor = document.querySelectorAll('input[name="radio-for"]');

//Radio Buttons

/* fixed values for currencies*/

/*
    pegar o tipo de moeda de entrada
    pegar o tipo de moeda de saida
    verificar se ouve valor digitado
    converter
    exibir valor
    */


const buttonError = () => {
    button.className = 'convert-button error';
    inputCurrency.className = 'input-money error';

}
const buttonSuccess = () => {
    button.className = 'convert-button success';
    inputCurrency.className = 'input-money';
}

const changeCurrencyFrom = () => {
    const selectValue = document.querySelector('input[name="radio-from"]:checked').value;
    const currencyImg = document.querySelector('#currency-from-img');
    const realValueText = document.querySelector('#real-value-text');
    const inputCoin = inputCurrency.value;
    console.log(selectValue);

    switch (selectValue) {
        case 'brl':
            currencyImg.src = './assets/images/band-brasil.jpg';
            realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(inputCoin);
            break;
        case 'usd':
            currencyImg.src = './assets/images/band-usd.png';
            realValueText.innerHTML = new Intl.NumberFormat('es-US', {
                style: 'currency',
                currency: 'USD'
            }).format(inputCoin);

            break;
        case 'eur':
            currencyImg.src = './assets/images/band-eur.png';
            realValueText.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(inputCoin);

            break;
        case 'btc':
            currencyImg.src = './assets/images/band-btc.jpg';
            realValueText.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'BTC'
            }).format(inputCoin);

            break;
        default:
            return;
    }
}

const changeCurrencyFor = () => {
    const selectValue = document.querySelector('input[name="radio-for"]:checked').value;
    const currencyImg = document.querySelector('#currency-for-img');
    const currencyValueText = document.querySelector('#currency-value-text');
    const inputCoin = inputCurrency.value;
    console.log(selectValue);
    switch (selectValue) {
        case 'brl':
            currencyImg.src = './assets/images/band-brasil.jpg';
            currencyValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(inputCoin);
            break;
        case 'usd':
            currencyImg.src = './assets/images/band-usd.png';
            currencyValueText.innerHTML = new Intl.NumberFormat('es-US', {
                style: 'currency',
                currency: 'USD'
            }).format(inputCoin);
            break;
        case 'eur':
            currencyImg.src = './assets/images/band-eur.png';
            currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(inputCoin);
            break;
        case 'btc':
            currencyImg.src = './assets/images/band-btc.jpg';
            currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'BTC'
            }).format(inputCoin);
            break;
        default:
            return;
    }
}

const convertCurrency = () => {
    // const realValueText = document.querySelector('#real-value-text');
    const inputCoin = inputCurrency.value;
    const currencyValueText = document.querySelector('#currency-value-text');
    const selectFor = document.querySelector('input[name="radio-for"]:checked');
    const selectFrom = document.querySelector('input[name="radio-from"]:checked');
    const selectValueFor = selectFor.value;
    const selectValueFrom = selectFrom.value;

    let brl = 0;
    let usd = 0;
    let eur = 0;
    let btc = 0;

    switch (selectValueFrom) {
        case 'brl': {
            brl = 1;
            usd = 0.18;
            eur = 0.19;
            btc = 0.000011;
            console.log('braa')
        }
            break;
        case 'usd':
            brl = 5.40;
            usd = 1;
            eur = 0.96;
            btc = 0.000060;
            console.log('usdaa');
            break;
        case 'eur':
            brl = 5.60;
            usd = 1.04;
            eur = 1;
            btc = 0.000062;
            console.log('euraa');
            break;
        case 'btc':
            brl = 90075.00;
            usd = 16682.10;
            eur = 16073.37;
            btc = 1;
            console.log('btcaa');
            break;
        default:
            console.log('fim');
    }



    if (inputCoin === '') {
        buttonError();
        console.log('vazio');
        return
    } else {
        buttonSuccess();
        switch (selectValueFor) {
            case 'brl':
                currencyValueText.innerHTML = new Intl.NumberFormat('pt-Br', {
                    style: 'currency',
                    currency: 'BRL'
                }).format(inputCoin * brl);
                console.log(inputCoin * brl);
                break;
            case 'usd':
                currencyValueText.innerHTML = new Intl.NumberFormat('es-US', {
                    style: 'currency',
                    currency: 'USD'
                }).format(inputCoin * usd);
                console.log(inputCoin * usd);
                break;
            case 'eur':
                currencyValueText.innerHTML = new Intl.NumberFormat('de-DE', {
                    style: 'currency',
                    currency: 'EUR'
                }).format(inputCoin * eur);
                console.log(inputCoin * eur);
                break;
            case 'btc':
                currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'BTC'
                }).format(inputCoin * btc);
                console.log(inputCoin * btc);
                break;
            default:
                return;
        }
        changeCurrencyFrom();
    }
}

const initializeChangeRadioFrom = () => {
    const inputCoin = inputCurrency.value;
    const realValueText = document.querySelector('#real-value-text');
    const currencyValueText = document.querySelector('#currency-value-text');
    if (inputCoin === '') {
        changeCurrencyFrom()
        realValueText.value = 0;
        currencyValueText.value = 0;
    } else {
        changeCurrencyFrom();
        convertCurrency();
    }
}

const initializeChangeRadioFor = () => {
    const inputCoin = inputCurrency.value;
    const realValueText = document.querySelector('#real-value-text');
    const currencyValueText = document.querySelector('#currency-value-text');

    if (inputCoin === '') {
        changeCurrencyFor();
        realValueText.value = 0;
        currencyValueText.value = 0;
    } else {
        changeCurrencyFor();
        convertCurrency();
    }
}
selectRadioFrom.forEach(radioBtnFrom => {
    radioBtnFrom.addEventListener('change', initializeChangeRadioFrom);
});
selectRadioFor.forEach(radioBtnFor => {
    radioBtnFor.addEventListener('change', initializeChangeRadioFor);
})

document.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        convertCurrency();
    }
})

button.addEventListener('click', convertCurrency);

const initialize = () => {
    initializeChangeRadioFor();
    initializeChangeRadioFrom();
}

initialize();