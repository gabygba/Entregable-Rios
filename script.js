let clasesReservadas =
  JSON.parse(localStorage.getItem("clasesReservadas")) || [];

let arrayDeClases = [
  {
    id: "1",
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Lunes",
    horario: "09:30",
  },
  {
    id: "2",
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Lunes",
    horario: "16:30",
  },
  {
    id: "3",
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Martes",
    horario: "19:00",
  },
  {
    id: "4",
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Miercoles",
    horario: "16:30",
  },
  {
    id: "5",
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Jueves",
    horario: "19:00",
  },
  {
    id: "6",
    nombre: "Yoga",
    instructor: "Cande",
    capacidad: 5,
    dia: "Jueves",
    horario: "09:30",
  },
  {
    id: "7",
    nombre: "Funcional",
    instructor: "Andres",
    capacidad: 5,
    dia: "Lunes",
    horario: "20:00",
  },
  {
    id: "8",
    nombre: "Funcional",
    instructor: "Andres",
    capacidad: 5,
    dia: "Miercoles",
    horario: "20:00",
  },
  {
    id: "9",
    nombre: "Funcional",
    instructor: "Andres",
    capacidad: 5,
    dia: "Viernes",
    horario: "20:00",
  },
  {
    id: "10",
    nombre: "Ciclismo",
    instructor: "Marcela",
    capacidad: 5,
    dia: "Martes",
    horario: "13:30",
  },
  {
    id: "11",
    nombre: "Ciclismo",
    instructor: "Marcela",
    capacidad: 5,
    dia: "Jueves",
    horario: "13:30",
  },
];

const yogaClassList = document.getElementById("yoga-class-list");
const spinningClassList = document.getElementById("spinning-class-list");
const funcionalClassList = document.getElementById("funcional-class-list");

const reservarYogaBtn = document.getElementById("reservarYogaBtn");
const LiberarYogaBtn = document.getElementById("LiberarYogaBtn");

const reservarSpinningBtn = document.getElementById("reservarSpinningBtn");
const LiberarSpinningBtn = document.getElementById("LiberarSpinningBtn");

const reservarFuncionalBtn = document.getElementById("reservarFuncionalBtn");
const LiberarFuncionalBtn = document.getElementById("LiberarFuncionalBtn");

///////////////Yoga/////////////////

reservarYogaBtn.addEventListener("click", () => {


  ///Filtrar solo clases no reservadas/Disponibles
  let clasesDisponibles = arrayDeClases.filter(
    (clase) =>
      !clasesReservadas.some(
        (reservada) =>
          reservada.nombre === clase.nombre &&
          reservada.nombre === "Yoga" &&
          reservada.instructor === clase.instructor &&
          reservada.dia === clase.dia &&
          reservada.horario === clase.horario
      )
  );

  const yogaClasses = clasesDisponibles.filter(
    (clase) => clase.nombre === "Yoga"
  );
  yogaClassList.innerHTML = "";
  yogaClasses.forEach((clase, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
          ${clase.nombre} - ${clase.dia} ${clase.horario}
      `;
    li.addEventListener("click", () => yogaseleccionarClase(clase));
    yogaClassList.appendChild(li);
  });
  $("#yogaModal").modal("show");
});

LiberarYogaBtn.addEventListener("click", () => {


  const yogaClasses = clasesReservadas.filter(
    (clase) => clase.nombre === "Yoga"
  );
  yogaClassList.innerHTML = "";
  yogaClasses.forEach((clase, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
          ${clase.nombre} - ${clase.dia} ${clase.horario}
      `;
    li.addEventListener("click", () => yogaseleccionarClaseParaLiberar(clase));
    yogaClassList.appendChild(li);
  });
  $("#yogaModal").modal("show");
});

function yogaseleccionarClase(clase) {
  clasesReservadas.push(clase);
  arrayDeClases.splice(
    clasesReservadas.findIndex((clas) => clas.id === clase.id),
    1
  );

  localStorage.setItem("clasesReservadas", JSON.stringify(clasesReservadas));
  $("#yogaModal").modal("hide");
}

function yogaseleccionarClaseParaLiberar(clase) {
  arrayDeClases.push(clase);
  clasesReservadas.splice(
    arrayDeClases.findIndex((clas) => clas.id === clase.id),
    1
  );

  localStorage.setItem("clasesReservadas", JSON.stringify(clasesReservadas));
  $("#yogaModal").modal("hide");
}

///////////////Spinning/////////////////
reservarSpinningBtn.addEventListener("click", () => {
  ///Filtrar solo clases no reservadas/Disponibles
  let clasesDisponibles = arrayDeClases.filter(
    (clase) =>
      !clasesReservadas.some(
        (reservada) =>
          reservada.nombre === clase.nombre &&
          reservada.nombre === "Ciclismo" &&
          reservada.instructor === clase.instructor &&
          reservada.dia === clase.dia &&
          reservada.horario === clase.horario
      )
  );



  const spinningClasses = clasesDisponibles.filter(
    (clase) => clase.nombre === "Ciclismo"
  );
  spinningClassList.innerHTML = "";
  spinningClasses.forEach((clase, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
        ${clase.nombre} - ${clase.dia} ${clase.horario}
    `;
    li.addEventListener("click", () => spinningSeleccionarClase(clase));
    spinningClassList.appendChild(li);
  });
  $("#spinningModal").modal("show");
});


LiberarSpinningBtn.addEventListener("click", () => {


  const spinningClasses = clasesReservadas.filter(
    (clase) => clase.nombre === "Ciclismo"
  );
  spinningClassList.innerHTML = "";
  spinningClasses.forEach((clase, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
          ${clase.nombre} - ${clase.dia} ${clase.horario}
      `;
    li.addEventListener("click", () =>
      spinningSeleccionarClaseParaLiberar(clase)
    );
    spinningClassList.appendChild(li);
  });
  $("#spinningModal").modal("show");
});

function spinningSeleccionarClase(clase) {
  clasesReservadas.push(clase);
  arrayDeClases.splice(
    clasesReservadas.findIndex((clas) => clas.id === clase.id),
    1
  );
  localStorage.setItem("clasesReservadas", JSON.stringify(clasesReservadas));
  $("#spinningModal").modal("hide");
}

function spinningSeleccionarClaseParaLiberar(clase) {
  arrayDeClases.push(clase);
  clasesReservadas.splice(
    arrayDeClases.findIndex((clas) => clas.id === clase.id),
    1
  );
 // arrayDeClases.push(clasesReservadas[index]);
 // clasesReservadas.splice(index, 1);

  localStorage.setItem("clasesReservadas", JSON.stringify(clasesReservadas));
  $("#spinningModal").modal("hide");
}

///////////////Funcional/////////////////
reservarFuncionalBtn.addEventListener("click", () => {
  ///Filtrar solo clases no reservadas/Disponibles
  let clasesDisponibles = arrayDeClases.filter(
    (clase) =>
      !clasesReservadas.some(
        (reservada) =>
          reservada.nombre === clase.nombre &&
          reservada.nombre === "Funcional" &&
          reservada.instructor === clase.instructor &&
          reservada.dia === clase.dia &&
          reservada.horario === clase.horario
      )
  );



  const funcionalClasses = clasesDisponibles.filter(
    (clase) => clase.nombre === "Funcional"
  );
  funcionalClassList.innerHTML = "";
  funcionalClasses.forEach((clase, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
        ${clase.nombre} - ${clase.dia} ${clase.horario}
    `;
    li.addEventListener("click", () => funcionalSeleccionarClase(clase));
    funcionalClassList.appendChild(li);
  });
  $("#funcionalModal").modal("show");
});

LiberarFuncionalBtn.addEventListener("click", () => {

  const funcionalClasses = clasesReservadas.filter(
    (clase) => clase.nombre === "Funcional"
  );
  funcionalClassList.innerHTML = "";
  funcionalClasses.forEach((clase, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `
          ${clase.nombre} - ${clase.dia} ${clase.horario}
      `;
    li.addEventListener("click", () =>
      funcionalSeleccionarClaseParaLiberar(clase)
    );
    funcionalClassList.appendChild(li);
  });
  $("#funcionalModal").modal("show");
});

function funcionalSeleccionarClase(clase) {
  clasesReservadas.push(clase);
  arrayDeClases.splice(
    clasesReservadas.findIndex((clas) => clas.id === clase.id),
    1
  );

  localStorage.setItem("clasesReservadas", JSON.stringify(clasesReservadas));
  $("#funcionalModal").modal("hide");
}

function funcionalSeleccionarClaseParaLiberar(clase) {
  arrayDeClases.push(clase);
  clasesReservadas.splice(
    arrayDeClases.findIndex((clas) => clas.id === clase.id),
    1
  );

  localStorage.setItem("clasesReservadas", JSON.stringify(clasesReservadas));
  $("#funcionalModal").modal("hide");
}