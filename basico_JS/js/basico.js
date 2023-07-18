console.log(1 + "1");
console.log(1 - "1");

var x = 10;
let y = 11;

var x = 11;

//let y = 11;

console.log (typeof(x));

console.log("aula" * 2);

let numero = Number(50);
let numeroString = String(50);
let casaDecimais = 10.988;

console.log(typeof(numero));
console.log(typeof(numeroString));
console.log(typeof(casaDecimais));

//biblioteca MATH para fazer a potencia do número
console.log(Math.pow(2, 2))

//random, para entregar numero aleatorio
console.log(Math.random())

//a multiplicação serve para o numero maximo que 
//se deseja mostra o numero aleatorio, 
//o parseInt converte o numero random para inteiro

console.log(parseInt(Math.random() * 20))

/*document.querySelector('h1').innerHTML = "Meu titulo no JS"
document.getElementById('tituloId').innerHTML = "titulo do id no js"
document.querySelector('.tituloClass').innerHTML = "alterado pela classe"
*/
//document.getElementsByClassName('tituloClass').innerHTML = "h1 alterado pelo class"

//vetor em javascript, segue mesmo padrão java
//os dados tem que ser do mesmo tipo..
var vetorNumerico = [1, 2 , 3, 4, 5]

//recupera o indice do vetor e retorna o valor no indice 
console.log(vetorNumerico[0])

//parecido com o void la do java
function multiplicar(a, b){
    console.log(a * b)
}
//chama a função para ser executada
multiplicar(10, 10)

//função com retorno tipo numerico
function funcaoComRetorno(x, y){
    return x * y
}

console.log(funcaoComRetorno(10, 5))

//ArrowFunction
var mensagemOla = () => {
    return "Olá novamente"
}

console.log(mensagemOla());

document.getElementById('recebeuFoco').onfocus = 
function(){
    focado()
}

function focado(){
    document.getElementById('recebeuFoco').style.background = "green"
}

function valorDigitado(){
    let recebido = document.getElementById('recebeuFoco').value;
    alert("valor recebido via input: " + recebido);
}