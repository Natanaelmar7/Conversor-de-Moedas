
let botao = document.getElementById("botão");
let select = document.getElementById("select-moedas");

 async function converterMoedas() {


let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function(resposta){
    return resposta.json()
})

  let dolar = moedas.USDBRL.high
  let euro = moedas.EURBRL.high


  let inputValorReais = Number(document.getElementById("input").value);
  let textoReal = document.getElementById("texto-real");
  let inputMoedas = document.getElementById("input-moedas");

  if (select.value === "US$ Dólar Americano") {
    let valorEmDolares = inputValorReais / dolar;
    inputMoedas.innerHTML = valorEmDolares.toLocaleString("en-Us", {
      style: "currency",
      currency: "USD",
    });
  }
  if (select.value === "€ Euro") {
    let valorEmEuros = inputValorReais / euro;
    inputMoedas.innerHTML = valorEmEuros.toLocaleString("de-DE", {
      style: "currency",
      currency: "EUR",
    });
  }
  textoReal.innerHTML = inputValorReais.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

//Essa função é responsavel por trocar a bandeira e o nome das moedas
function trocaDeMoeda() {
  let textoMoedas = document.getElementById("texto-moedas");
  let bandeiraMoedas = document.getElementById("bandeira-moedas");

  if (select.value === "US$ Dólar Americano") {
    textoMoedas.innerHTML = "Dólar Americano";
    bandeiraMoedas.src = "./img/estados-unidos.png";
  }
  if (select.value === "€ Euro") {
    textoMoedas.innerHTML = "Euro";
    bandeiraMoedas.src = "./img/euro.png";
  }
  converterMoedas()
}

botao.addEventListener("click", converterMoedas); //esse ta ouvindo o click no botão
select.addEventListener("change", trocaDeMoeda);//esse ta fazendo a troca de moeda 
