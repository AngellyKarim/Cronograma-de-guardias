
const cronograma = {
  "2025-08-03": {
    "7:00 a.m.": "Bañarse y alistarse para nuevo día",
    "7:45 a.m.": "Preparar desayuno",
    "8:00 a.m.": ["Desayuno para residentes", "Medicación (desayuno)", "Revisión pañales"],
    "12:00 a.m.": "Revisión general de pacientes",
  },
  "2025-08-04": {
    "7:00 a.m.": ["Desayuno personal", "Llevar a Rosa al baño y comedor"],
    "8:00 a.m.": ["Desayuno residentes", "Medicación", "Revisión pañales"],
    "12:00 a.m.": "Revisión general de pacientes",
  },
  "2025-08-05": {
    "7:00 a.m.": "Entrega de turno",
    "12:00 a.m.": "Revisión general de pacientes"
  },
  "2025-08-07": {
    "7:00 a.m.": "Ingreso a turno",
    "8:00 a.m.": "Desayuno residentes",
    "12:00 a.m.": "Revisión general de pacientes"
  },
  "2025-08-08": {
    "12:00 a.m.": "Revisión general de pacientes"
  },
  "2025-08-09": {
    "7:00 a.m.": "Entrega de turno",
    "12:00 a.m.": "Revisión general de pacientes"
  },
  "2025-08-11": {
    "7:00 a.m.": "Ingreso a turno",
    "12:00 a.m.": "Revisión general de pacientes"
  },
  "2025-08-12": {
    "12:00 a.m.": "Revisión general de pacientes"
  },
  "2025-08-13": {
    "7:00 a.m.": "Entrega de turno",
    "12:00 a.m.": "Revisión general de pacientes"
  },
  "2025-08-15": {
    "7:00 a.m.": "Ingreso a turno",
    "12:00 a.m.": "Revisión general de pacientes"
  },
  "2025-08-16": {
    "12:00 a.m.": "Revisión general de pacientes"
  },
  "2025-08-17": {
    "7:00 a.m.": "Entrega de turno",
    "12:00 a.m.": "Revisión general de pacientes"
  }
};

const horas = [
  "7:00 a.m.", "7:30 a.m.", "7:45 a.m.", "8:00 a.m.",
  "8:30 a.m.", "9:00 a.m.", "10:00 a.m.", "11:00 a.m.",
  "12:00 a.m.", "1:00 p.m.", "2:00 p.m.", "3:00 p.m.",
  "4:00 p.m.", "5:00 p.m.", "6:00 p.m.", "7:00 p.m.",
  "8:00 p.m.", "9:00 p.m.", "10:00 p.m.", "11:00 p.m."
];

function generarTabla() {
  const contenedor = document.getElementById("cronograma");
  const fechas = Object.keys(cronograma);
  let tabla = "<table><thead><tr><th>Hora</th>";

  fechas.forEach(fecha => {
    const opciones = { weekday: 'long', day: 'numeric', month: 'long' };
    const f = new Date(fecha + "T00:00:00");
    tabla += `<th>${f.toLocaleDateString('es-ES', opciones)}</th>`;
  });

  tabla += "</tr></thead><tbody>";

  horas.forEach(hora => {
    tabla += `<tr><th>${hora}</th>`;
    fechas.forEach(fecha => {
      const tarea = cronograma[fecha][hora];
      if (!tarea) {
        tabla += "<td></td>";
      } else if (Array.isArray(tarea)) {
        tabla += "<td>" + tarea.map(t => `<div>${t}</div>`).join("") + "</td>";
      } else {
        tabla += `<td>${tarea}</td>`;
      }
    });
    tabla += "</tr>";
  });

  tabla += "</tbody></table>";
  contenedor.innerHTML = tabla;
}

document.getElementById("modo-btn").addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});

generarTabla();
