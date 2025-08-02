const fechasTurno = [
  "Dom 3 ago", "Lun 4 ago", "Mar 5 ago",
  "Jue 7 ago", "Vie 8 ago", "Sáb 9 ago",
  "Lun 11 ago", "Mar 12 ago", "Mié 13 ago",
  "Vie 15 ago", "Sáb 16 ago", "Dom 17 ago"
];

const horasDelDia = [
  "12 a.m", "1 a.m", "2 a.m", "3 a.m", "4 a.m", "5 a.m", "6 a.m",
  "7 a.m", "8 a.m", "9 a.m", "10 a.m", "11 a.m",
  "12 p.m", "1 p.m", "2 p.m", "3 p.m", "4 p.m", "5 p.m", "6 p.m",
  "7 p.m", "8 p.m", "9 p.m", "10 p.m", "11 p.m"
];

const tareasPorHora = {
  "4 a.m": [
    "Cambio de pañal a Dilma",
    "Lavado perineal y cambio de pañal a Dora",
    "Lavado y cambio de pañal a Adelina",
    "Tomar signos vitales a Adelina, Iris, Dilma y señora frente a Adelina",
    "Medicaciones en ayunas"
  ],
  "5 a.m": [
    "Sacar basura",
    "Revisar entorno segundo piso"
  ],
  "6 a.m": [
    "Bañarme y alistarme para el día",
    "Preparar ropa de trabajo"
  ],
  "7 a.m": [
    "Dejar mis cosas",
    "Desayunar",
    "Llevar al baño a Rosa",
    "Colocar a Rosa en el comedor"
  ],
  "8 a.m": [
    "Preparar desayunos",
    "Servir desayuno a residentes",
    "Desayuno especial para Adelina y Cecilia",
    "Cambio de pañal y chata a Adelina si deposición"
  ],
  "9 a.m": [
    "Cambio de pañal a Adelina si no se le baña",
    "Dar licuado a Dora",
    "Bañar a Cecilia",
    "Bañar a Iris o Dilma alternadamente si no es día de Adelina"
  ],
  "9:30 a.m": [
    "Bañar a Adelina (solo martes y viernes)"
  ],
  "10 a.m": [
    "Terminar baños",
    "Revisar ropa limpia de pacientes"
  ],
  "11 a.m": [
    "Dar merienda",
    "Ayudar a servir jugos",
    "Alistar almuerzo",
    "Preguntar si Iris y Dilma desean bajar"
  ],
  "11:30 a.m": [
    "Pedir dieta especial para Cecilia",
    "Pedir dieta especial para Adelina",
    "Licuar y colar comida para Dora"
  ],
  "12 p.m": [
    "Servir almuerzo",
    "Servir sopa en vaso a Cecilia",
    "Dar comida a pacientes que almuerzan en cama"
  ],
  "1 p.m": [
    "Almuerzo personal",
    "Llevar a Rosa al baño",
    "Colocar a Rosa en el sillón"
  ],
  "2 p.m": [
    "Descanso breve"
  ],
  "3 p.m": [
    "Dar comida licuada a Dora"
  ],
  "4 p.m": [
    "Empezar preparación de cena",
    "Revisión del entorno segundo piso"
  ],
  "5 p.m": [
    "Servir la cena",
    "Colocar pañal a Rosa",
    "Aplicar gaseobet, lágrimas, timolol, mentol a Rosa"
  ],
  "6 p.m": [
    "Acompañar a pacientes a sus cuartos",
    "Revisión general"
  ],
  "7 p.m": [
    "2 puffs y lágrimas artificiales a Adelina",
    "Colocar oxígeno (balón) 2% a Adelina"
  ],
  "8 p.m": [
    "Cambio de pañal y chata a Adelina si deposición"
  ],
  "9 p.m": [
    "Conversar con Raulino y Blanca",
    "Verificar televisores apagados"
  ],
  "10 p.m": [
    "Apagar luces",
    "Descansar hasta las 12 a.m"
  ],
  "12 a.m": [
    "Revisión general de pacientes"
  ],
  "1 a.m": [
    "Revisión general"
  ],
  "2 a.m": [
    "Revisión general"
  ],
  "3 a.m": [
    "Revisión general"
  ]
};
const cronograma = document.getElementById("cronograma");

function crearEncabezado() {
  const filaHeader = document.createElement("div");
  filaHeader.classList.add("fila");

  const celdaHora = document.createElement("div");
  celdaHora.classList.add("hora");
  celdaHora.textContent = "Hora";
  filaHeader.appendChild(celdaHora);

  fechasTurno.forEach(fecha => {
    const celdaDia = document.createElement("div");
    celdaDia.classList.add("dia");
    celdaDia.textContent = fecha;
    filaHeader.appendChild(celdaDia);
  });

  cronograma.appendChild(filaHeader);
}

function crearFilasCronograma() {
  horasDelDia.forEach(hora => {
    const fila = document.createElement("div");
    fila.classList.add("fila");

    const celdaHora = document.createElement("div");
    celdaHora.classList.add("hora");
    celdaHora.textContent = hora;
    fila.appendChild(celdaHora);

    fechasTurno.forEach(fecha => {
      const celda = document.createElement("div");
      celda.classList.add("bloque");

      const tareas = tareasPorHora[hora];
      if (tareas && tareas.length > 0) {
        const lista = document.createElement("ul");
        tareas.forEach(tarea => {
          const item = document.createElement("li");
          item.textContent = tarea;
          lista.appendChild(item);
        });
        celda.appendChild(lista);
      }

      celda.addEventListener("click", () => {
        celda.classList.toggle("completado");
      });

      fila.appendChild(celda);
    });

    cronograma.appendChild(fila);
  });
}

crearEncabezado();
crearFilasCronograma();
