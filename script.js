var engine = {
  "cores": ['green', 'purple', 'pink', 'red', 'yellow', 'orange', 'grey', 'black'],
  "hexadecimais":{
    'green': '#02ef00',
    'purple': '#790093',
    'pink': '#f02a7e',
    'red': '#e90808',
    'yellow':'#e7d703',
    'orange': '#f16529',
    'grey': '#ebebeb',
    'black': '#141414'
  },
  "moedas": 0
}

const audioMoeda = new Audio ('audio/moeda.mp3')
const audioErrou = new Audio ('audio/errou.mp3')

function sortearCor(){
  var indexCorSorteada = Math.floor(Math.random() * engine.cores.length);
  var legendaCorDaCaixa = document.getElementById('cor-na-caixa');
  var nomeCorSorteada = engine.cores[indexCorSorteada]

  legendaCorDaCaixa.innerText = nomeCorSorteada.toUpperCase();

  return engine.hexadecimais[nomeCorSorteada];
}

function aplicarCorNaCaixa(nomeDaCor){
  var caixaDasCores = document.getElementById('cor-atual');

  caixaDasCores.style.backgroundColor = nomeDaCor;
  caixaDasCores.style.backgroundImage = "url('/img/caixa-fechada.png')";
  caixaDasCores.style.backgroundSize = "100%";
}

function atualizaPontuacao(valor){
  var pontuacao = document.getElementById('pontuacao-atual')

  engine.moedas += valor;

  if (valor < 0){
    audioErrou.play();
  }else {
    audioMoeda.play();
  }

  pontuacao.innerText = engine.moedas;
}