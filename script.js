const cronogramaData = [
  { hora: "7 a.m.", tareas: ["Bañarse y alistarse para nuevo día", "Desayuno personal", "Llevar a Rosa al baño y comedor"] },
  { hora: "7:30 a.m.", tareas: ["", "Llevar a Rosa al baño y comedor"] },
  { hora: "7:45 a.m.", tareas: ["Preparar desayuno"] },
  { hora: "8 a.m.", tareas: ["Desayuno para residentes", "Medicación (desayuno)", "Revisión pañales"] },
];

const fechas = ["Domingo 3 de agosto", "Lunes 4 de agosto"];

const cronogramaDiv = document.getElementById("cronograma");

function generarTabla() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const thHora = document.createElement("th");
  thHora.textContent = "Hora";
  headerRow.appendChild(thHora);

  fechas.forEach(fecha => {
    const th = document.createElement("th");
    th.textContent = fecha;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  cronogramaData.forEach(entry => {
    const row = document.createElement("tr");

    const horaCell = document.createElement("td");
    horaCell.textContent = entry.hora;
    horaCell.className = "hora";
    row.appendChild(horaCell);

    fechas.forEach((fecha, index) => {
      const cell = document.createElement("td");
      if (entry.tareas[index]) {
        const div = document.createElement("div");
        div.textContent = entry.tareas[index];
        cell.appendChild(div);
      }
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  cronogramaDiv.appendChild(table);
}

document.getElementById("modoOscuroBtn").addEventListener("click", () => {
  document.body.classList.toggle("oscuro");
});

generarTabla();