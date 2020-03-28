// Ejercicio 1 -> NÚMEROS PARES

/* El usuario ingresará un número y le
especificaremos si el número ingresado
es par o impar. */

var numero = Number(prompt('Ingrese un número'))

if (!isNaN(numero) && numero === 0) {
  alert(`el número ' ${numero} ' no está en las categorias de pares o impares`)
} else if (!isNaN(numero) && numero % 2 === 0) {
  alert('El número que ingresaste es par')
} else {
  alert('El número que ingresaste es impar')
}

///////////////////////

// Ejercicio 2 -> DATOS PERSONALES

/* Solicitar la edad de un usuario.
Luego preguntarle si se encuentra
cursando estudios.
En función de ambas respuestas indicar
el resultado en pantalla. */

var nombre = prompt('Cuál es tu nombre?')
var edad = Number(prompt(`Hola ${nombre}, ahora dime cuál es tu edad?`))
var estudios = confirm('Estas cursando estudios?')

estudios
  ? alert(`La persona de nombre ${nombre} y edad ${edad} años se encuentra cursando estudios`)
  : alert(`La persona de nombre ${nombre} y edad ${edad} años no se encuentra cursando estudios`)

///////////////////////

// Ejercicio 3 -> VOTANTES

/* Obtener la edad de un votante e
indicarle si tiene permitido votar.
Las personas mayores de 18 años votan */

var nombre = prompt('Cuál es tu nombre?')
var edad = Number(prompt(`Hola ${nombre}, ahora dime cuál es tu edad?`))

edad >= 18
  ? alert(`Felicidades ${nombre}, tienes ${edad} años y puedes votar`)
  : alert(`Lo sentimos ${nombre}, tienes ${edad} años y no puedes votar`)

///////////////////////

// Ejercicio 4 -> CONTRASEÑA

/* Un usuario intenta ingresar a nuestro
sistema. Le solicitaremos el usuario y
contraseña.
Definiremos una contraseña y ante el
ingreso del usuario definiremos si la ha
ingresado correctamente.
Mostrar un mensaje a la salida según el
caso. */

var contrasenia = '12e4s6t89'
var entrar = confirm('Deseas entrar al sistema?')

if (entrar) {
  var nombre = prompt('Cuál es tu nombre?')
  var ingresarContrasenia = prompt(`Hola ${nombre}, por favor ingresa la contraseña para poder entrar al sistema:`)

  if (ingresarContrasenia === contrasenia) {
    alert('Felicidades, ingresaste al sistema.')
  } else {
    alert('La contraseña ingresa no es correcta')
  }
} else {
  alert('Chao!!!')
}

///////////////////////

// Ejercicio 5 -> RESULTADO DE UNA DIVISIÓN

/* Pedir dos números a un usuario para
realizar una división. */

var numero1 = Number(prompt('Ingresa un número'))
var numero2 = Number(prompt('Ingresa otro número'))

if (numero1 > 0 && numero2 > 0) {
  var division = numero1 / numero2
  alert(`El resultado de divisir ${numero1} entre ${numero2} es: ${division.toFixed(2)}`)
} else if (numero1 == 0 || numero2 == 0) {
  alert(`No puedes usar ' 0 ' para realizar una visión`)
} else if (isNaN(numero1) || isNaN(numero2)) {
  alert('No ingresaste datos válidos para realizar la operación')
}

///////////////////////

// Ejercicio 6 -> SOLICITAR NOMBRE Y APELLIDO

/* Solicitar nombre y apellido.
Mostrar un mensaje de bienvenida con
el nombre completo */

var nombre = prompt('Cuál es tu nombre?')
var apellido = prompt('Cuál es tu apellido')

alert(`Bienvenido ${nombre} ${apellido}`)

///////////////////////

// Ejercicio 7 -> HORA DE LA REUNIÓN

/* El usuario debe ingresar la hora de
comienzo y de finalización de una
reunión.
Si la fecha de comienzo es mayor o
igual a la de finalización, mostrar un
error, de lo contrario indicar que la
información se guardó correctamente. */

var nombre = prompt('Cuál es tu nombre')
var establecerReunion = confirm(`Hola ${nombre}
Deseas establecer una nueva reunión`)

if (establecerReunion) {
  var reunion = prompt('Dale un nombre a la reunion')
  var dia = prompt('Define un día para la reunión')
  var mes = prompt('Mes de la reunión')
  var anio = confirm('La reunión se llevará acabo el presente año?')
  if (anio) {
    anio = 2020
  } else {
    anio = parseInt(prompt('En qué año se llevará acabo la reunión'))
  }
  var hora = prompt('A qué hora se llevará acabo la reunión', 'Formato: Hora - Minutos --> 00:00')
  alert(`${nombre}, tu reunión quedó programa para el ${dia} de ${mes} de ${anio} a las ${hora} con el nombre de '${reunion}'`)
} else {
  alert('Chao!!!')
}

///////////////////////