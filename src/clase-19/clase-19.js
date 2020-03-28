// Ejercicio 1 -> SUMA

/* Obtener el valor de una suma a partir de
dos números ingresados por el usuario.
Una vez obtenida la suma, mostrar el
resultado a través de un mensaje. */

var numero1 = Number(prompt('Ingerse un número'))
var numero2 = Number(prompt('Ingrese otra número'))

alert(`La suma de los dos números es ${numero1 + numero2}`)

///////////////////////

// Ejercicio 2 -> PROMEDIO

/* Obtener el valor de un promedio a partir
del ingreso de cinco números.
Una vez obtenido el valor, mostrar el
resultado a través de un mensaje. */

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

/* Pediremos al usuario que ingrese el
valor del diámetro de un círculo.
A partir de ese valor, calcularemos su
perímetro.
Por último, mostraremos su resultado al
usuario. */

var diametro = Number(prompt('Ingrese el diametro del circulo'));
var perimetro = Math.PI * diametro

alert(`El perimetro del circulo es ${perimetro.toFixed(2)}`)

///////////////////////

// Ejercicio 4 -> SUPERFICIE

/* Pediremos al usuario que ingrese el
valor del diámetro de un círculo.
A partir de ese valor, calcularemos su
superficie.
Por último, mostraremos su resultado al
usuario. */

var radio = Number(prompt('Ingrese el diámetro del ciruculo')) / 2
var superficie = Math.PI * Math.pow(radio, 2)

alert(`La superficie del circulo es ${superficie.toFixed(2)}`)

///////////////////////

// Ejercicio 5 -> NOMBRE

/* Pediremos al usuario que ingrese su
nombre.
A partir de ese valor, lo mostraremos en
pantalla en minúsculas. */

var nombre = (prompt('Ingrese su nombre'))

alert(nombre.toLowerCase())

///////////////////////

// Ejercicio 6 -> APELLIDO

/* Pediremos al usuario que ingrese su
apellido.
A partir de ese valor, lo mostraremos en
pantalla en mayúsculas. */

var apellido = (prompt('Ingrese su apellido'))

alert(apellido.toUpperCase())

///////////////////////

// Ejercicio 7 -> NOMBRE Y APELLIDO

/* Siguiendo los ejercicios del paso
anterior, pediremos al usuario que
ingrese su nombre y luego su apellido.
Mostraremos su nombre en minúsculas
y su apellido en mayúsculas. */

var nombre = (prompt('Ingrese su nombre'))
var apellido = (prompt('Ingrese su apellido'))

alert(`Su nombre completo es ${nombre.toLowerCase()} ${apellido.toUpperCase()}`)

///////////////////////

// Ejercicio 8 -> DATOS COMPLETOS

/* Al igual que en los pasos anteriores,
pediremos al usuario el nombre, el
apellido y también su edad.
Mostraremos a la salida el siguiente
resultado: */

var nombre = (prompt('Ingrese su nombre'))
var apellido = (prompt('Ingrese su apellido'))
var edad = parseInt(prompt('Ingrese su edad'))

alert(`Su nombre es: ${nombre}
Su apellido es: ${apellido}
Su edad es: ${edad}`)

///////////////////////