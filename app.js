const cartaArray = [
    {
        nome:'Alquimista',
        img: 'img/alchemist.webp',
    },
    {
        nome:'Bárbaro',
        img: 'img/barbarian.webp',
    },
    {
        nome:'Bardo',
        img: 'img/bard.webp',
    },
    {
        nome:'Campeão',
        img: 'img/champion.webp',
    },
    {
        nome:'Clérigo',
        img: 'img/cleric.webp',
    },
    {
        nome:'Druida',
        img: 'img/druid.webp',
    },
    {
        nome:'Feiticeiro',
        img: 'img/sorcerer.webp',
    },
    {
        nome:'Guerreiro',
        img: 'img/fighter.webp',
    },
    {
        nome:'Ladino',
        img: 'img/rogue.webp',
    },
    {
        nome:'Mago',
        img: 'img/wizard.webp',
    },
    {
        nome:'Monge',
        img: 'img/monk.webp',
    },
    {
        nome:'Patrulheiro',
        img: 'img/ranger.webp',
    },
    {
        nome:'Alquimista',
        img: 'img/alchemist.webp',
    },
    {
        nome:'Bárbaro',
        img: 'img/barbarian.webp',
    },
    {
        nome:'Bardo',
        img: 'img/bard.webp',
    },
    {
        nome:'Campeão',
        img: 'img/champion.webp',
    },
    {
        nome:'Clérigo',
        img: 'img/cleric.webp',
    },
    {
        nome:'Druida',
        img: 'img/druid.webp',
    },
    {
        nome:'Feiticeiro',
        img: 'img/sorcerer.webp',
    },
    {
        nome:'Guerreiro',
        img: 'img/fighter.webp',
    },
    {
        nome:'Ladino',
        img: 'img/rogue.webp',
    },
    {
        nome:'Mago',
        img: 'img/wizard.webp',
    },
    {
        nome:'Monge',
        img: 'img/monk.webp',
    },
    {
        nome:'Patrulheiro',
        img: 'img/ranger.webp',
    }
  
]

cartaArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const resultadoDisplay = document.querySelector('#resultado');
let cartasEscolhidas = [];
let cartasEscolhidasIds = []; 
const cartasCertas = [];

function criarTabuleiro () {
    for (let i = 0; i < cartaArray.length; i++) {
        const carta = document.createElement('img');
        carta.setAttribute('src','img/costas.png');
        carta.setAttribute('data-id', i);
        carta.addEventListener('click', virarCarta);
        gridDisplay.appendChild(carta);
    }
}
criarTabuleiro()

resultadoDisplay.textContent = '0';

function checarCombinação () {
    const cartas = document.querySelectorAll('img');
    const opcaoUmId = cartasEscolhidasIds[0];
    const opcaoDoisId = cartasEscolhidasIds[1];
    console.log(cartas);
    console.log('Confirmando a combinação!');
    if (opcaoUmId == opcaoDoisId) {
        alert('Você clicou na mesma carta!');
        cartasEscolhidas[0] = [];
        cartasEscolhidas[1] = [];
        cartas[opcaoUmId].setAttribute('src', 'img/costas.png');
        cartas[opcaoDoisId].setAttribute('src', 'img/costas.png');
        

    }
    
    if (cartasEscolhidas[0] == cartasEscolhidas[1]) {
        alert('Você conseguiu uma combinação!');
        cartas[opcaoUmId].setAttribute('src', 'img/fundo-carta.png');
        cartas[opcaoDoisId].setAttribute('src', 'img/fundo-carta.png');
        cartas[opcaoUmId].removeEventListener('click', virarCarta);
        cartas[opcaoDoisId].removeEventListener('click', virarCarta);
        cartasCertas.push(cartasEscolhidas);
    } else {
        cartas[opcaoUmId].setAttribute('src', 'img/costas.png');
        cartas[opcaoDoisId].setAttribute('src', 'img/costas.png');
    }
    
    resultadoDisplay.textContent = cartasCertas.length;
    cartasEscolhidas = [];
    cartasEscolhidasIds = [];
    
    if (cartasCertas.length == cartaArray.length/2) {
        resultadoDisplay.innerHTML = 'Parabéns, você encontrou todas as cartas!';
    }
}

function virarCarta () {
    console.log(cartaArray);
    let cartaId = this.getAttribute('data-id');
    cartasEscolhidas.push(cartaArray[cartaId].nome);
    cartasEscolhidasIds.push(cartaId);
    console.log(cartasEscolhidas);
    console.log(cartasEscolhidasIds);
    this.setAttribute('src', cartaArray[cartaId].img);
    if(cartasEscolhidas.length === 2) {
        setTimeout(checarCombinação, 500)
    }
}