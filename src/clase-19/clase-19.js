// Ejercicio 1 -> SUMA

var numero1 = Number(prompt('Ingerse un número'))
var numero2 = Number(prompt('Ingrese otra número'))

alert(`La suma de los dos números es ${numero1 + numero2}`)

///////////////////////

// Ejercicio 2 -> PROMEDIO

var numero = 0

for (var i = 0; i < 5; i++) {
  var nuevoNumero = Number(prompt('Ingrese un número'))
  if (!isNaN(nuevoNumero)) {
    numero = numero + nuevoNumero
  } else {
    i -= 1
  }
}

alert(`El primedio de los número digitados es ${numero / 5}`)

///////////////////////

// Ejercicio 3 -> PRERIMETRO

var diametro = Number(prompt('Ingrese el diametro del circulo'));
var perimetro = Math.PI * diametro

alert(`El perimetro del circulo es ${perimetro.toFixed(2)}`)

///////////////////////

// Ejercicio 4 -> SUPERFICIE

var radio = Number(prompt('Ingrese el diámetro del ciruculo')) / 2
var superficie = Math.PI * Math.pow(radio, 2)

alert(`La superficie del circulo es ${superficie.toFixed(2)}`)

///////////////////////

// Ejercicio 5 -> NOMBRE

var nombre = (prompt('Ingrese su nombre'))

alert(nombre.toLowerCase())

///////////////////////

// Ejercicio 6 -> APELLIDO

var apellido = (prompt('Ingrese su apellido'))

alert(apellido.toUpperCase())

///////////////////////

// Ejercicio 7 -> NOMBRE Y APELLIDO

var nombre = (prompt('Ingrese su nombre'))
var apellido = (prompt('Ingrese su apellido'))

alert(`Su nombre completo es ${nombre.toLowerCase()} ${apellido.toUpperCase()}`)

///////////////////////

// Ejercicio 8 -> DATOS COMPLETOS

var nombre = (prompt('Ingrese su nombre'))
var apellido = (prompt('Ingrese su apellido'))
var edad = parseInt(prompt('Ingrese su edad'))

alert(`Su nombre es: ${nombre}
Su apellido es: ${apellido}
Su edad es: ${edad}`)

///////////////////////