const fechasTurno = [
  "Dom 3 ago", "Lun 4 ago", "Mar 5 ago",
  "Jue 7 ago", "Vie 8 ago", "Sáb 9 ago",
  "Lun 11 ago", "Mar 12 ago", "Mié 13 ago",
  "Vie 15 ago", "Sáb 16 ago", "Dom 17 ago"
];

const horasDelDia = [
  "4 a.m", "5 a.m", "6 a.m", "7 a.m", "8 a.m", "9 a.m", "9:30 a.m",
  "10 a.m", "11 a.m", "11:30 a.m", "12 p.m", "1 p.m", "2 p.m",
  "3 p.m", "4 p.m", "5 p.m", "6 p.m", "7 p.m", "8 p.m", "9 p.m",
  "10 p.m", "12 a.m", "1 a.m", "2 a.m", "3 a.m"
];

const tareasGenerales = {
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
    "Bañarme y alistarme para el día"
  ],
  "7 a.m": [
    "Dejar mis cosas",
    "Desayunar",
    "Llevar al baño a Rosa",
    "Colocar a Rosa en el comedor"
  ],
  "8 a.m": [
    "Preparar desayunos",
    "Servir desayuno",
    "Desayuno especial para Adelina y Cecilia",
    "Cambio de pañal y chata a Adelina si deposición"
  ],
  "9 a.m": [
    "Cambio de pañal a Adelina si no se baña",
    "Dar licuado a Dora",
    "Bañar a Cecilia",
    "Bañar a Iris o Dilma (alternados)"
  ],
  "10 a.m": [
    "Terminar baños",
    "Revisar ropa limpia de pacientes"
  ],
  "11 a.m": [
    "Dar merienda",
    "Ayudar a servir jugos",
    "Preguntar a Iris y Dilma si desean bajar"
  ],
  "11:30 a.m": [
    "Pedir dieta especial para Cecilia",
    "Pedir dieta especial para Adelina",
    "Licuar y colar comida para Dora"
  ],
  "12 p.m": [
    "Servir almuerzo",
    "Servir sopa en vaso a Cecilia",
    "Dar comida a quienes almuerzan en cama"
  ],
  "1 p.m": [
    "Almuerzo personal",
    "Llevar a Rosa al baño",
    "Colocar a Rosa en el sillón"
  ],
  "3 p.m": [
    "Dar comida licuada a Dora"
  ],
  "4 p.m": [
    "Preparar cena",
    "Revisión del segundo piso"
  ],
  "5 p.m": [
    "Servir cena",
    "Colocar pañal a Rosa",
    "Aplicar gaseobet, timolol, lágrimas y mentol a Rosa"
  ],
  "7 p.m": [
    "2 puffs y lágrimas a Adelina",
    "Colocar oxígeno a Adelina (balón al 2%)"
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
  "12 a.m": ["Revisión general"],
  "1 a.m": ["Revisión general"],
  "2 a.m": ["Revisión general"],
  "3 a.m": ["Revisión general"]
};

const tareasPorDiaYHora = {
  "Mar 5 ago": {
    "9:30 a.m": ["Bañar a Adelina"]
  },
  "Vie 8 ago": {
    "9:30 a.m": ["Bañar a Adelina"]
  },
  "Mar 12 ago": {
    "9:30 a.m": ["Bañar a Adelina"]
  },
  "Vie 15 ago": {
    "9:30 a.m": ["Bañar a Adelina"]
  }
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

      const tareasEspecificas = tareasPorDiaYHora[fecha]?.[hora] || [];
      const tareasGeneralesEnHora = tareasGenerales[hora] || [];

      const todasLasTareas = [...tareasGeneralesEnHora, ...tareasEspecificas];

      if (todasLasTareas.length > 0) {
        const lista = document.createElement("ul");
        todasLasTareas.forEach(tarea => {
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
