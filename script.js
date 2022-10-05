// Carne - 400g por pessoas + de 6 horas - 650
//cerveja - 1200 ml por pessoa + 6 horas + 2000ml 
//refrigerante + 1000 ml por pessoas + 6 horas 1500 ml

//crianças valor 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");


function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao)/2 * criancas);
    
    resultado.innerHTML =  `<p>${qtdTotalCarne}g de Carne </p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja}ml de Cerveja </p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas}ml de Bebida </p>`
    console.log(qtdTotalCarne)
}

function carnePP(duracao){
    if(duracao >= 6)
        return 650;
    return 400;
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }
}

