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
            currencyImg.src = './assets/images/band-brl.jpg';
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
        case 'gbp':
            currencyImg.src = './assets/images/band-gbp.png';
            realValueText.innerHTML = new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: 'GBP'
            }).format(inputCoin);
            break;
        case 'jpy':
            currencyImg.src = './assets/images/band-jpy.png';
            realValueText.innerHTML = new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY'
            }).format(inputCoin);
            break;
        case 'ars':
            currencyImg.src = './assets/images/band-ars.png';
            realValueText.innerHTML = new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'ARS'
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
            currencyImg.src = './assets/images/band-brl.jpg';
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
            case 'gbp':
                currencyImg.src = './assets/images/band-gbp.png';
                currencyValueText.innerHTML = new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'GBP'
                }).format(inputCoin);
                break;
        case 'jpy':
            currencyImg.src = './assets/images/band-jpy.png';
            currencyValueText.innerHTML = new Intl.NumberFormat('ja-JP', {
                style: 'currency',
                currency: 'JPY'
            }).format(inputCoin);
            break;
        case 'ars':
            currencyImg.src = './assets/images/band-ars.png';
            currencyValueText.innerHTML = new Intl.NumberFormat('es-AR', {
                style: 'currency',
                currency: 'ARS'
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
    let gbp = 0;
    let jpy = 0;
    let ars = 0;

    switch (selectValueFrom) {
        case 'brl': {
            brl = 1;
            usd = 0.18;
            eur = 0.19;
            btc = 0.000011;
            gbp = 0.16;
            jpy = 26.04;
            ars = 31.05;
            console.log('bra')
        }
            break;
        case 'usd':
            brl = 5.40;
            usd = 1;
            eur = 0.96;
            btc = 0.000060;
            gbp = 0.83;
            jpy = 138.60;
            ars = 165.23;
            console.log('usd');
            break;
        case 'eur':
            brl = 5.60;
            usd = 1.04;
            eur = 1;
            btc = 0.000062;
            gbp = 0.86;
            jpy = 144.25;
            ars = 171.95;
            console.log('eur');
            break;
        case 'btc':
            brl = 90075.00;
            usd = 16682.10;
            eur = 16073.37;
            btc = 1;
            gbp = 13656.59;
            jpy = 2298717.13;
            ars = 2740189.97;
            console.log('btc');
            break;
        case 'gbp':
            brl = 6.45;
            usd = 1.21;
            eur = 1.16;
            btc = 0.000073;
            gbp = 1;
            jpy = 167.89;
            ars = 200.17;
            console.log('gbp');
            break;
        case 'jpy':
            brl = 0.037;
            usd = 0.0072;
            eur = 0.0069;
            btc = 0;
            gbp = 0.0060;
            jpy = 1;
            ars = 1.19;
            console.log('jpy');
            break;
        case 'ars':
            brl = 0.0032;
            usd = 0.0061;
            eur = 0.0058;
            btc = 0;
            gbp = 0.0050;
            jpy = 0, 84;
            ars = 1;
            console.log('ars');
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
            case 'gbp':
                currencyValueText.innerHTML = new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'GBP'
                }).format(inputCoin * gbp);
                console.log(inputCoin * gbp);
                break;
            case 'jpy':
                currencyValueText.innerHTML = new Intl.NumberFormat('ja-JP', {
                    style: 'currency',
                    currency: 'JPY'
                }).format(inputCoin * jpy);
                console.log(inputCoin * jpy);
                break;
            case 'ars':
                currencyValueText.innerHTML = new Intl.NumberFormat('es-AR', {
                    style: 'currency',
                    currency: 'ARS'
                }).format(inputCoin * ars);
                console.log(inputCoin * ars);
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

