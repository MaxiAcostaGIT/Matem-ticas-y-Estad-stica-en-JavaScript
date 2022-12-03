// Cuadrado
const ladoCuadrado = document.getElementById("ladoCuadrado");

// Triangulo
const trianguloLado1 = document.getElementById("ladoTriangulo1");
const trianguloLado2 = document.getElementById("ladoTriangulo2");
const trianguloBase = document.getElementById("ladoTrianguloBase");
const botonTrianguloResultado = document.getElementById("botonResultadoTriangulo");

// Circulo
const radioCirculo = document.getElementById("radioCirculo");
const botonResultadoCirculo = document.getElementById("botonResultadoCirculo");

// Eventos
botonTrianguloResultado.addEventListener("click", calcularTriangulo);

botonResultadoCirculo.addEventListener("click", calcularCirculo);

// Funciones
function calcularCuadrado() {
    const input = Number(ladoCuadrado.value);
    const perimetro = input * 4;
    const area = input * input;

    document.getElementById("resultadoCuadrado").innerHTML = "El perimetro del cuadrado es: " + perimetro + " cm" + "<br>" + "<br>"+ "El area del cuadrado es: " + area + " cm2";
}

function calcularTriangulo() {
    const perimetroTriangulo = Number(trianguloLado1.value) + Number(trianguloLado2.value) + Number(trianguloBase.value);
    const alturaTriangulo = Math.sqrt((Number(trianguloLado1.value) * Number(trianguloLado1.value)) - ((Number(trianguloBase.value) * Number(trianguloBase.value)) / 4));
    const areaTriangulo = (Number(trianguloBase.value) * alturaTriangulo) / 2;

    document.getElementById("resultadoTriangulo").innerHTML = "El perimetro del triangulo es: " + perimetroTriangulo + " cm" + "<br>" + "<br>"+ "El area del triangulo es: " + areaTriangulo + " cm2";
}

function calcularCirculo() {
    const diametro = Number(radioCirculo.value) * 2;
    const perimetroCirculo = diametro * Math.PI;
    const areaCirculo = (Number(radioCirculo.value) * Number(radioCirculo.value)) * Math.PI;

    document.getElementById("resultadoCirculo").innerHTML = "El perimetro del circulo es: " + perimetroCirculo + " cm" + "<br>" + "<br>"+ "El area del circulo es: " + areaCirculo + " cm2";
}