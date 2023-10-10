/*////////////////////////////////////////////////////////////////
///////////////////__________AULA 01___________///////////////////
*/////////////////////////////////////////////////////////////////

//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
//No index.html, adicionamos no onclick o seguinte código:
<button onclick="exibirMensagemNoConsole()" class="button">Console</button>
//Já no app.js:
function exibirMensagemNoConsole() {
    console.log('O botão foi clicado!')
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
//No index.html, adicionamos no onclick o seguinte código:
<button onclick="exibirAlerta()" class="button">Alert</button>
//Já no app.js:
function exibirAlerta() {
    alert('Eu amo Js')
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
//No index.html, adicionamos no onclick o seguinte código:
<button onclick="exibirPrompt()" class="button">Prompt</button>
//Já no app.js:
function exibirPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

//Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
//No index.html, adicionamos no onclick o seguinte código:
<button onclick="somandoDoisNumeros()" class="button">Soma</button>
//Já no app.js:
function somandoDoisNumeros() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}

/*////////////////////////////////////////////////////////////////
///////////////////__________AULA 02___________///////////////////
*/////////////////////////////////////////////////////////////////

//Criar uma função que exibe "Olá, mundo!" no console.
function greetings() {
    document.write('Hello World!');
}
greetings();

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function nome(nome){
    document.write(`Olá, ${nome}.`);
}
nome('Glauber');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobro(numero){
    return numero * 2;
}
let resultadoDobro = dobro(9);
document.write(resultadoDobro);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function media(n1, n2, n3){
    return (n1+n2+n3)/3;
}
let resultadoMedia = (media(3,6,7)).toFixed(2);
document.write(resultadoMedia);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function maiorMenor(a, b){
    return a > b ? a : b;
}
let maiorNumero = maiorMenor(55, 6);
document.write(maiorNumero);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function quadrado(x){
    return x * x;
}
let resultadoQuadrado = quadrado(10);
document.write(resultadoQuadrado);

/*////////////////////////////////////////////////////////////////
///////////////////__________AULA 03___________///////////////////
*/////////////////////////////////////////////////////////////////

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
function calculaIMC(altura, peso){
	let imc = peso / (altura * altura);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
  
  // Exemplo de uso
  let numero = 1;
  let resultado = calcularFatorial(numero);
  document.write(`O fatorial de ${numero} é ${resultado}`);

//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.
function converterMoeda(dolar){
 let cotacao = 4.80;
 let real = dolar * cotacao;
 return real.toFixed(2);
}
let dolar = 50;
let real = converterMoeda(dolar);
document.write(`${dolar} dólares equivalem a R$ ${real}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calculaAreaPerimetro(altura, largura){
	let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  document.write(`Área da sala: ${area} metros quadrados.`);
  document.write(`Perímetro da sala: ${perimetro} metros.`);
  
}
let altura = 10;
let largura = 30;
calculaAreaPerimetro(altura, largura);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.
function calculaAreaPerimetroCircular(raio){
	let area = Math.PI * (raio * raio);
  let perimetro = 2 * Math.PI * raio;
  
  document.write(`Área da sala: ${area.toFixed(2)} metros quadrados.`);
  document.write(`Perímetro da sala: ${perimetro.toFixed(2)} metros.`);
  
}
let raio = 10;
calculaAreaPerimetroCircular(raio);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function tabuada(numeroTabuada){
	for(i = 1; i<= 10; i++){
  let resultado = numeroTabuada * i;
  document.write(`${numeroTabuada} x ${i} = ${resultado}`);
  }
}
let numeroTabuada = 5;
tabuada(numeroTabuada);

/*////////////////////////////////////////////////////////////////
///////////////////__________AULA 04___________///////////////////
*/////////////////////////////////////////////////////////////////

//Crie uma lista vazia, com o nome listaGenerica.
let listaGenerica = [];

//Crie uma lista de linguagens de programação chamada linguagensDeProgramacao com os seguintes elementos: 'JavaScript','C','C++', 'Kotlin' e 'Python'.
let linguagensDeProgamacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: 'Java', 'Ruby' e 'GoLang'.
linguagensDeProgamacao.push('Java', 'Ruby', 'GoLang');

//Crie uma função que mostre no console todos os elementos da lista linguagensDeProgamacao.
function mostrarLinguagensSeparadamente(){
    for(i = 0; i < linguagensDeProgamacao.length; i++) {
        document.write(linguagensDeProgamacao[i]);
    }
}
mostrarLinguagensSeparadamente();

//Crie uma função que mostre no console todos os elementos da lista linguagensDeProgamacao de maneira inversa.
function mostrarLinguagensSeparadamenteReverso(){
    for(i = linguagensDeProgamacao.length -1; i >= 0 ; i--) {
        document.write(linguagensDeProgamacao[i]);
    }
}
mostrarLinguagensSeparadamenteReverso();

//Crie uma função que calcule a média dos elementos em uma lista de números.
function calcularMedia(lista){
    let soma = 0;
    for(i = 0; i < lista.length; i++){
        soma += lista[i];
    }
    return soma / lista.length;
}
let numeros = [10, 20, 30, 40, 50];
let media = calcularMedia(numeros);
document.write('Média:', media);


//Crie uma função que mostre no console o maior e o menor número em uma lista.
function encontrarMaiorMenor(lista){
    let maior = lista[0];
    let menor = lista[0];

    for(i = 1; i < lista.length; i++){
        if(lista[i] > maior){
            maior = lista[i];
        }
        if(lista[i] < menor){
            menor = lista[i];
        }
    }
    document.write('Maior:', maior);
    document.write('Menor:', menor);
}
let numerosMaiorMenor = [15, 8, 25, 5, 12];
encontrarMaiorMenor(numeros);

//Crie uma função que retorna a soma de todos os elementos em uma lista
function calcularSoma(lista){
    let soma = 0;
    for(i = 0; i < lista.length; i++){
        soma += lista[i];
    }
    return soma;
}
let numerosCalculaSoma = [15, 8, 25, 5, 12];
let soma = calcularSoma(numerosCalculaSoma);
document.write('Soma:', soma);

//Crie uma função que retorna a posição da lista onde está um elemento passado como parâmetro, ou -1 caso ele não exista na lista.
function encontrarIndiceElemento(lista, elemento) {
    for (i = 0; i <lista.length; i++) {
        if(lista[i] === elemento){
            return i; //retorna o índice do elemento encontrado
        }
    }
    return -1; //retorna -1 se o elemento não for encontrado na lista
}
let numerosIndice = [18, 5, 65, 4, 10];
let indiceEncontrado = encontrarIndiceElemento(numerosIndice, 4);
document.write('Índice de 4:', indiceEncontrado); //deve imprimir o índice 3

//Crie uma função que recebe duas listas de números do mesmo tamanho e retorna uma nova lista com a soma elemento a elemento.
function somaListas(lista1, lista2){
    let novaLista = [];
    for (i = 0; i < lista1.length; i++){
        novaLista.push(lista1[i] + lista2[i]);
    }
    return novaLista;
}
let listaA = [1, 3, 5];
let listaB = [2, 4, 6];
document.write('Soma das listas:', somarListas(listaA, listaB));

//Crie uma função que recebe uma lista de números e retorna uma nova lista com o quadrado de cada número.
function quadradoDosElementos(lista){
    let novaLista = [];
    for (i = 0; i < lista.length; i++) {
        novaLista.push(lista[i] * lista[i]);
    }
    return novaLista;
}
let elementosAoQuadrado = [2, 3, 4, 5, 6];
let listaQuadrados = quadradoDosElementos(elementosAoQuadrado);
document.write('Lista dos elementos ao quadrado:', listaQuadrados);

/*////////////////////////////////////////////////////////////////
///////////////////__________AULA 05___________///////////////////
*/////////////////////////////////////////////////////////////////