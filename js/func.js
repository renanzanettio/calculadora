
function CalculadoraAdicao(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = eval(parseInt(num1) + parseInt(num2));
    document.getElementById("resultado").innerHTML = resultado;
}

function CalculadoraSubtracao(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = eval(parseInt(num1) - parseInt(num2));
    document.getElementById("resultado").innerHTML = resultado;
}

function CalculadoraMultiplicacao(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = eval(parseInt(num1) * parseInt(num2));
    document.getElementById("resultado").innerHTML = resultado;
}

function CalculadoraDivisao(){
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    resultado = eval(parseInt(num1) / parseInt(num2));
    document.getElementById("resultado").innerHTML = resultado;
}

//Calculadora de potencia
function CalculadoraPotencia(){
    numerador = document.getElementById("numerador").value;
    expoente = document.getElementById("expoente").value;
    resultado = eval(Math.pow(parseInt(numerador), parseInt(expoente)));
    document.getElementById("resultado").innerHTML = resultado;
}

//Calculadora de raiz
function CalculadoraRaiz(){
    numero = document.getElementById("numero").value;
    raiz = document.getElementById("raiz").value;
    resultado = Math.sqrt(parseInt(numero), parseInt(raiz));
    document.getElementById("resultado").innerHTML = resultado;
}

//Calculadora de area de um triangulo retangulo
function CalculadoraArea(){
    base = document.getElementById("base").value
    altura = document.getElementById("altura").value
    resultado = eval((base * altura)/2);
    document.getElementById("resultado").innerHTML = resultado + "cm"
}

//Calculadora de raiz quadratica
function CalculadoraBhaskara(){
    a = document.getElementById("a").value
    b = document.getElementById("b").value
    c = document.getElementById("c").value
    delta = Math.pow(b,2) - 4 * a * c;

    if(a == 0){
        resultado = ("<h4 style='margin-top: 5px;'>O valor <strong>'a'</strong> deve ser diferente de 0 </h4>");
    }
    else if(delta < 0){
        resultado = ("<h5 style='margin-top: 5px;'>A equação não possui raizes reais </h5>")
    }
    else{
        x1 = (-b + Math.sqrt(delta)) / (2 * a);
        x2 = (-b - Math.sqrt(delta)) / (2 * a);
        resultado = "{" + x1 + ", " + x2 + "}";
    }
    document.getElementById("resultado").innerHTML = resultado
}