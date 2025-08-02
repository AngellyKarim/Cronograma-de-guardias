const horas = [];
for (let h = 4; h <= 23; h++) {
  const horaStr = `${h < 10 ? "0" + h : h}:00`;
  horas.push(horaStr);
}

// Días de turno (48 horas sí, 48 no) desde el 3 al 17 de agosto 2025
const fechasTurno = [];
let start = new Date("2025-08-03");
while (start <= new Date("2025-08-17")) {
  for (let i = 0; i < 2; i++) {
    const fecha = new Date(start);
    fecha.setDate(start.getDate() + i);
    fechasTurno.push(fecha.toISOString().split("T")[0]);
  }
  start.setDate(start.getDate() + 4); // Avanza al siguiente ciclo de turno
}

function generarCronograma() {
  const tabla = document.getElementById("tablaCronograma");
  tabla.innerHTML = "";

  // Crear fila de encabezado
  const filaHeader = document.createElement("tr");
  const thHora = document.createElement("th");
  thHora.innerText = "Hora";
  thHora.classList.add("sticky-col");
  filaHeader.appendChild(thHora);

  fechasTurno.forEach((fecha) => {
    const th = document.createElement("th");
    const dateObj = new Date(fecha);
    const opciones = { weekday: "short", day: "numeric", month: "short" };
    th.innerText = dateObj.toLocaleDateString("es-ES", opciones);
    filaHeader.appendChild(th);
  });
  tabla.appendChild(filaHeader);

  // Cargar tareas comunes
  const tareasFijas = {
    "07:00": "Bajar a Rosa al baño y colocarla en el comedor",
    "08:00": "Desayuno",
    "09:00": "Revisar pañal de Adelina si no se baña",
    "09:30": "Bañar a Adelina (solo martes y viernes)",
    "11:30": "Pedir segundo para Cecilia y dieta para Adelina",
    "11:45": "Bajar a Iris y Dilma para el almuerzo",
    "15:00": "Dar comida licuada a Dora",
    "17:00": "Preparar cena",
    "17:30": "Servir cena",
    "20:00": "Oxígeno a Dora al 1%",
    "20:15": "Colocar chata y cambiar pañal a Adelina",
    "20:30": "Bajar luces",
    "22:00": "Apagar luces",
    "00:00": "Descanso",
    "04:00": "Revisión de pacientes + signos vitales (Adelina, Dilma, Iris, vecina)",
    "07:00": "Fin de turno (si aplica), alistarse para el día",
  };

  // Crear filas por hora
  horas.forEach((hora) => {
    const fila = document.createElement("tr");

    const thHora = document.createElement("th");
    thHora.innerText = hora;
    thHora.classList.add("sticky-col");
    fila.appendChild(thHora);

    fechasTurno.forEach((fecha) => {
      const celda = document.createElement("td");

      // Determinar tareas para esa hora y fecha
      const diaSemana = new Date(fecha).getDay(); // 0 = domingo, ..., 6 = sábado
      let tarea = tareasFijas[hora] || "";

      // Personalizar tareas específicas
      if (hora === "09:30") {
        if (diaSemana === 2 || diaSemana === 5) {
          tarea = "Bañar a Adelina";
        } else {
          tarea = "";
        }
      }

      celda.innerText = tarea;
      celda.addEventListener("click", () => {
        celda.classList.toggle("tachado");
      });
      fila.appendChild(celda);
    });

    tabla.appendChild(fila);
  });
}

window.onload = generarCronograma;
