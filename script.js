let clasesReservadas = [];
let arrayDeClases = [
  {
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Lunes",
    horario: "09:30",
  },
  {
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Lunes",
    horario: "16:30",
  },
  {
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Martes",
    horario: "19:00",
  },
  {
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Miercoles",
    horario: "16:30",
  },
  {
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Jueves",
    horario: "19:00",
  },
  {
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Jueves",
    horario: "09:30",
  },
  {
    nombre: "Funcional",
    instructor: "Andres",
    capacidad: 5,
    dia: "Lunes",
    horario: "20:00",
  },
  {
    nombre: "Funcional",
    instructor: "Andres",
    capacidad: 5,
    dia: "Miercoles",
    horario: "20:00",
  },
  {
    nombre: "Funcional",
    instructor: "Andres",
    capacidad: 5,
    dia: "Viernes",
    horario: "20:00",
  },
  {
    nombre: "Ciclismo",
    instructor: "Marcela",
    capacidad: 5,
    dia: "Martes",
    horario: "13:30",
  },
  {
    nombre: "Ciclismo",
    instructor: "Marcela",
    capacidad: 5,
    dia: "Jueves",
    horario: "13:30",
  },
];

function mostrarClase(clase) {
  console.log(JSON.stringify(clase));
  const text =
    " " + clase.nombre + "-" + " " + clase.dia + " " + clase.horario + "\n";
  return text;
}

function listarClases(clases, mensaje) {
  console.log("Listar clases: ");
  clases.forEach((clase, index) => {
    mensaje += index + 1 + "-" + mostrarClase(clase);
  });
  return mensaje;
}

function reservarClase() {
  let mensaje = "Seleccionar la clase que desea reservar:\n";
  let lista = listarClases(arrayDeClases, mensaje);
  console.log(lista);
  const selec = Number(prompt(lista));
  console.log(selec);
  clasesReservadas.push(arrayDeClases[selec - 1]);
  arrayDeClases.splice(selec - 1, 1);
  let indice = clasesReservadas.length-1;
  alert("Clase reservada: " + mostrarClase(clasesReservadas[indice]));
}

function liberarClase() {
  if (clasesReservadas.length <= 0) {
    alert("No tiene clases reservadas.");
    return
  }
  let mensaje = "Seleccionar la clase que desea liberar:\n";
  let lista = listarClases(clasesReservadas, mensaje);
  const selec = Number(prompt(lista));
  arrayDeClases.push(clasesReservadas[selec - 1]);
  clasesReservadas.splice(selec - 1, 1);
  let indice = arrayDeClases.length - 1;
  alert("Clase liberada: " + mostrarClase(arrayDeClases[indice]));
}

function mostrarClasesReservadas() {
  if (clasesReservadas.length <= 0) {
    alert("No tiene clases reservadas.");
  }
  console.log("Clases reservadas:");
  let mensaje = "Clases Reservadas:\n";
  let lista = listarClases(clasesReservadas, mensaje);
  return alert(lista);
}

function core() {

  let opcion = Number(
    prompt("Seleccione accion a realizar:\n 1-Reservar Clase\n 2-Liberar Clase")
  );

  while (isNaN(opcion)) {
    alert("Eso no es un numero");
    opcion = Number(
      prompt(
        "Seleccione accion a realizar:\n 1-Reservar Clase\n 2-Liberar Clase"
      )
    );
  }

  while (opcion) {
    
    switch (opcion) {
      case 1:
        reservarClase();
        break;

      case 2:
        liberarClase();
        break;

      default:
        break;
    }

    opcion = Number(
      prompt("Seleccione accion a realizar:\n 1-Reservar Clase\n 2-Liberar Clase")
    );
  }

  mostrarClasesReservadas();
}

core();