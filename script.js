const cronograma = {
  "Domingo 3 de agosto": {
    "7 a.m.": ["Llegada y desayuno personal", "Llevar a Rosa al baño y luego al comedor"],
    "7:45 a.m.": ["Preparar desayuno"],
    "8 a.m.": ["Desayuno para residentes", "Medicación (desayuno)", "Revisión pañales"],
    "9:30 a.m.": ["Bañar a Cecilia", "Preparar sopa licuada para Dora"],
    "11:30 a.m.": ["Pedir plato especial para Cecilia", "Pedir dieta de Adelina"],
    "12 p.m.": ["Almuerzo", "Servir sopa a Cecilia en vaso"],
    "3 p.m.": ["Alimentar a Dora (licuado colado)"],
    "5 p.m.": ["Cena"],
    "8:15 p.m.": ["Colocar chata a Adelina", "Cambio de pañal"],
    "10 p.m.": ["Apagar luces", "Descanso personal"],
    "12 a.m.": ["Inicio de rondas nocturnas"],
    "4 a.m.": ["Cambio de pañal y lavado perineal a Dora", "Cambio pañal a Dilma", "Cambio pañal y lavado a Adelina"],
    "5 a.m.": ["Descanso breve"],
    "7 a.m.": ["Bañarse y alistarse para nuevo día"]
  },
  "Lunes 4 de agosto": {
    "7 a.m.": ["Desayuno personal", "Llevar a Rosa al baño y comedor"],
    "8 a.m.": ["Desayuno residentes", "Medicación", "Revisión pañales"],
    "9:30 a.m.": ["Bañar a Cecilia", "Bañar a Iris"],
    "11:30 a.m.": ["Pedir dieta especial", "Verificar estado de alimentos"],
    "12 p.m.": ["Almuerzo", "Organizar alimentos por piso"],
    "3 p.m.": ["Alimentar a Dora"],
    "5 p.m.": ["Cena"],
    "8:15 p.m.": ["Colocar chata a Adelina", "Cambio de pañal"],
    "10 p.m.": ["Apagar luces", "Descanso nocturno"]
  }
};

// Renderización del cronograma
const headerRow = document.getElementById('header-row');
const horaHeader = document.createElement('th');
horaHeader.textContent = "Hora";
headerRow.appendChild(horaHeader);

Object.keys(cronograma).forEach(fecha => {
  const th = document.createElement('th');
  th.textContent = fecha;
  headerRow.appendChild(th);
});

const horarios = [
  "7 a.m.", "7:30 a.m.", "7:45 a.m.", "8 a.m.", "9 a.m.", "9:30 a.m.", "10 a.m.",
  "11:30 a.m.", "12 p.m.", "1 p.m.", "3 p.m.", "4 p.m.", "5 p.m.", "6 p.m.",
  "7 p.m.", "8:15 p.m.", "9 p.m.", "10 p.m.", "12 a.m.", "1 a.m.", "2 a.m.",
  "3 a.m.", "4 a.m.", "5 a.m.", "6 a.m.", "7 a.m."
];

const body = document.getElementById('cronograma-body');
horarios.forEach(hora => {
  const row = document.createElement('tr');
  const cellHora = document.createElement('td');
  cellHora.className = 'hora';
  cellHora.textContent = hora;
  row.appendChild(cellHora);

  Object.keys(cronograma).forEach(fecha => {
    const cell = document.createElement('td');
    const tareas = cronograma[fecha][hora];
    if (tareas) {
      tareas.forEach(tarea => {
        const div = document.createElement('div');
        div.className = 'tarea';
        div.textContent = tarea;
        div.addEventListener('click', () => div.classList.toggle('tachado'));
        cell.appendChild(div);
      });
    }
    row.appendChild(cell);
  });

  body.appendChild(row);
});

// Botón de modo oscuro funcional
const toggle = document.getElementById("toggle-dark");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}