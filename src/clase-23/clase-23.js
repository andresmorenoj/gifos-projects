// Ejercicio 1 -> USUARIO Y CONTRASEÑA

/* Solicitar al usuario, usuario y contraseña para
ingresar a un sistema mediante prompt.
Crear una función para validar que que las
credenciales ingresadas sean válidas.*/

const USER = 'pepito01'
const PASSWORD = '1234567890'

let usuario = prompt('Ingrese el usuario')
let contrasena = prompt('Ingrese la contraseña')

function validacionCredeciales() {
  if ((usuario != USER) || (contrasena != PASSWORD)) {
    throw (new Error('El usuario o contraseña no son correctos. Intenta nuevamente'))
  }
  else if ((usuario == USER) && (contrasena == PASSWORD)) {
    alert('Tu usuario y contraseña son correctos.')
  }
}

try {
  validacionCredeciales()
}
catch (e) {
  alert(e.message)
  usuario = prompt('Ingrese el usuario')
  contrasena = prompt('Ingrese la contraseña')
  validacionCredeciales()
}

///////////////////////

// Ejercicio 2 -> DÍAMETRO CIRCULO 

/* Solicitar al usuario el valor de la circunferencia de
un círculo y calcular su diámetro. */

const pi = Math.PI
let circunferencia = Number(prompt('Cuál es la circunferencia del circulo'))

function calculaDiametro(circunferencia) {
  let diametro = circunferencia / pi
  console.log(diametro.toFixed(2));

}

calculaDiametro(circunferencia)

///////////////////////

// Ejercicio 3 -> PSEUDOCÓDIGO A JAVASCRIPT

/* hacer
  n1 = inrese un número
  n2 = ingrese otro número

  Si (n1 y n2 son número enteros)
    mostrar suma de n1 y n2
  No
    mensaje de error

repetir mientras suma sea menor a 100 */


let suma = 0

while (suma < 100) {
  let n1 = Number(prompt('Ingresa un número'))
  let n2 = Number(prompt('Ingresa otro número'))
  function sumar(numero1, numero2) {
    if (!isNaN(numero1) && !isNaN(numero2)) {
      if (numero1 % 1 != 0 || numero2 % 1 != 0) {
        suma = 0
        throw (new Error('Los número deben ser enteros. Intenta nuevamente'))
      } else if (numero1 % 1 == 0 && numero2 % 1 == 0) {
        suma = numero1 + numero2
        suma < 100
          ? alert(`La suma es ${suma}. Debe ser '100' o mayor para salir del programa`)
          : alert(`Felicidades la suma es ${suma}, puedes salir del programa`)
      }
    } else {
      alert('Los valores que ingresaste no corresponde a un número. Intenta de nuevo')
    }
  }
  try {
    sumar(n1, n2)
  } catch (error) {
    alert(error.message)
  }
}

///////////////////////

// Ejercicio 4 -> DIAGRAMA A JAVASCRIPT

let n = Number(prompt('Ingresa un número'))

if (n > 10) {
  if (Number(prompt('Ingresa un número')) > 100) {
    alert('A')
  } else {
    alert('B')
  }
} else {
  if (Number(prompt('Ingresa un número')) > 1000) {
    alert('C')
  } else {
    alert('D')
  }
}

alert(n)

///////////////////////