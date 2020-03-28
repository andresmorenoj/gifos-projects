// Ejercicio 1 -> SUMEMOS

/* Crear un script que permita ingresar solamente
Ȁ valores mediante prompt y nos muestre la
suma total de todos los valores ingresados */

var suma = 0

for (var i = 0; i < 5; i++) {
  var numero = Number(prompt('Ingresa un número'))
  if (!isNaN(numero)) {
    suma = suma + numero
  }
}

alert(`La suma de los 5 número es: ${suma}`)

///////////////////////

// Ejercicio 2 -> PROMEDIO

/* A nuestro script agreguemos el promedio de
todos los números ingresados. */

var suma = 0

for (var i = 0; i < 5; i++) {
  var numero = Number(prompt('Ingresa un número'))
  if (!isNaN(numero)) {
    suma = suma + numero
  } else {
    i -= 1
  }
}

alert(`La suma de los 5 número es: ${suma / i}`)

///////////////////////

// Ejercicio 3 -> EDADES

/* Ingresar N cantidad de edades mediante prompt
hasta que se ingrese un cero.
Al finalizar mostrar cuántos son mayores de edad */

var mayorEdad = 0
var menorEdad = 0

do {
  var edad = parseInt(prompt('Ingresa una edad'))
  if (!isNaN(edad)) {
    if (edad >= 18) {
      mayorEdad += 1
    } else if (edad != 0 && edad < 18) {
      menorEdad += 1
    }
  } else {
    alert('El valor que ingresaste no corresponde a valor válido para una edad. Intenta nuevamente')
  }
} while (edad != 0)

console.log(`El total de personas mayores de edad es: ${mayorEdad}
El total de personas menores de edad es: ${menorEdad}`);

///////////////////////

// Ejercicio 4 --> PROMEDIO CONDICIONAL

/* Ingresar N cantidad de números mediante prompt.
Mostrar el promedio de los números ingresados de 1 dígito.
Terminar el programa con la palabra “salir”. */

var promedio = 0
var salir = true
var contador = 0

while (salir) {
  var numero = Number(prompt('Ingresa un número'))
  if (!isNaN(numero)) {
    if (numero < 10 && numero >= 0) {
      contador += 1
      promedio += numero
    }
  } else {
    alert('El valor que ingresaste no corresponde a un número. Intenta nuevamente')
  }
  salir = prompt(`Si deseas salir del programa escribe la palabra 'salir' o puedes dar click en cancelar para continuar`)
  if (salir === 'salir') {
    salir = false
  } else {
    salir = true
  }
}

console.log(`Ingresaste ${contador} números de un digito
El promedio de los número de un digito es: ${promedio / contador}`);

///////////////////////

// Ejercicio 5 --> PARES E IMPARES

/* Ingresar N cantidad de números mediante prompt.
Mostrar quién tuvo más ingresos, si los pares o los impares
Terminar el programa un 0. */

var pares = 0
var impares = 0
var salir = true

while (salir) {
  var numero = Number(prompt('Ingresa un número'))
  if (!isNaN(numero)) {
    if (numero != 0 && numero % 2 == 0) {
      pares += 1
      salir = confirm(`Deseas salir del programa?`)
      if (salir) {
        salir = false
      } else {
        salir = true
      }
    } else if (numero != 0 && numero % 2 != 0) {
      impares += 1
      salir = confirm(`Deseas salir del programa?`)
      if (salir) {
        salir = false
      } else {
        salir = true
      }
    } else if (!isNaN(numero) && numero == 0) {
      salir = false
    }
  } else if (isNaN(numero)) {
    alert('El valor que ingresaste no corresponde a un número. Intenta nuevamente')
  }
}

if (pares > impares) {
  alert('Los pares tuvieron más ingresos con un total de ' + pares)
} else if (impares > pares) {
  alert('Los impares tuvieron más ingresos con un total de ' + impares)
}

///////////////////////

var numero = Number(prompt('Ingresa un número de 1 a 10'))

switch (numero) {
  case 1:
    alert(`El número ${numero} corresponde a la letra 'A'`)
    break;
  case 2:
    alert(`El número ${numero} corresponde a la letra 'B'`)
    break;
  case 3:
    alert(`El número ${numero} corresponde a la letra 'C'`)
    break;
  case 4:
    alert(`El número ${numero} corresponde a la letra 'D'`)
    break;
  case 5:
    alert(`El número ${numero} corresponde a la letra 'E'`)
    break;
  case 6:
    alert(`El número ${numero} corresponde a la letra 'F'`)
    break;
  case 7:
    alert(`El número ${numero} corresponde a la letra 'G'`)
    break;
  case 8:
    alert(`El número ${numero} corresponde a la letra 'H'`)
    break;
  case 9:
    alert(`El número ${numero} corresponde a la letra 'I'`)
    break;
  case 10:
    alert(`El número ${numero} corresponde a la letra 'J'`)
    break;
  case 0:
    alert(`El número ${numero} no corresponde a ninguna letra`)
    break;

  default:
    alert('No ingresaste una opción válida')
    break;
}

///////////////////////
