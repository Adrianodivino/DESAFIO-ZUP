const imagem = document.querySelector('#img1');
const botao = document.querySelector('button');
const nomeDoPersonagem = document.querySelector('#nome');
const especie = document.querySelector('#especie');
const condicao = document.querySelector('#status');

const imagem2 = document.querySelector('#img2');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const especie2 = document.querySelector('#especie2');
const condicao2 = document.querySelector('#status2');

const imagem3 = document.querySelector('#img3');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especie3 = document.querySelector('#especie3');
const condicao3 = document.querySelector('#status3');

gerarValoreAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem =() =>{
    let numeroAleatorio = gerarValoreAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers:{
            Accept : 'aplication/json',
            "Content-type": 'aplication/json'
        }
    }).then((response) => response.json())
    .then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });
}

gerarValoreAleatorio2 = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem2 =() =>{
    let numeroAleatorio2 = gerarValoreAleatorio2();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio2}`, {
        method:'GET',
        headers:{
            Accept : 'aplication/json',
            "Content-type": 'aplication/json'
        }
    }).then((response) => response.json())
    .then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        condicao2.innerHTML = data.status;
    });
}

gerarValoreAleatorio3 = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem3 =() =>{
    let numeroAleatorio3 = gerarValoreAleatorio3();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio3}`, {
        method:'GET',
        headers:{
            Accept : 'aplication/json',
            "Content-type": 'aplication/json'
        }
    }).then((response) => response.json())
    .then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        condicao3.innerHTML = data.status;
    });
}

botao.onclick =() => {
    pegarPersonagem();
    pegarPersonagem2();
    pegarPersonagem3();
}
    