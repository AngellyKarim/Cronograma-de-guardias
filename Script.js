const cronogramaPorDia = {
  "Domingo 03/08": {
    "07:00 a.m.": "Llegada, desayuno personal, bajar a Rosa al comedor",
    "08:00 a.m.": "Desayuno residentes (panes, huevo a Cecilia y Adelina)",
    "08:15 a.m.": "Cambio de pañal y chata a Adelina si deposición",
    "09:00 a.m.": "Cambio de pañal a Adelina si no se baña",
    "10:00 a.m.": "Baño a Cecilia",
    "11:30 a.m.": "Pedir segundo especial para Cecilia y dieta Adelina",
    "12:00 p.m.": "Almuerzo (Cecilia sopa en vaso, Iris y Dilma bajan)",
    "01:00 p.m.": "Ayudar a Rosa a comer, subir comida para Dora",
    "03:00 p.m.": "Dar comida licuada a Dora",
    "04:30 p.m.": "Preparar cena, revisar pisos",
    "05:00 p.m.": "Cena",
    "07:00 p.m.": "Oxígeno a Dora (1%), 2 puffs a Adelina",
    "08:15 p.m.": "Cambio de pañal y chata a Adelina",
    "10:00 p.m.": "Luces apagadas, descanso hasta medianoche"
  },
  "Lunes 04/08": {
    "12:00 a.m.": "Revisión de pacientes, rondas",
    "04:00 a.m.": "Cambio de pañal a Dilma, lavado perineal a Dora y Adelina",
    "04:30 a.m.": "Tomar signos vitales a Adelina, Dilma, Iris y paciente frente",
    "06:00 a.m.": "Bañarse, sacar basura, anotar signos si falta",
    "07:00 a.m.": "Desayuno personal, bajar a Rosa",
    "08:00 a.m.": "Desayuno residentes",
    "08:15 a.m.": "Chata y pañal a Adelina",
    "09:30 a.m.": "Baño a Iris (alternando con Dilma)",
    "11:30 a.m.": "Pedir segundo y dieta como siempre",
    "12:00 p.m.": "Almuerzo",
    "03:00 p.m.": "Dar comida licuada a Dora",
    "05:00 p.m.": "Cena",
    "08:15 p.m.": "Chata y pañal Adelina",
    "10:00 p.m.": "Luces apagadas"
  },
  // Las demás fechas seguirán aquí...
};

const fechas = Object.keys(cronogramaPorDia);

function generarTabla() {
  const tabla = document.getElementById("tablaCronograma");
  const encabezado = tabla.insertRow();
  encabezado.insertCell().textContent = "Hora";
  fechas.forEach(fecha => {
    const celda = encabezado.insertCell();
    celda.textContent = fecha;
  });

  const todasLasHoras = new Set();
  fechas.forEach(f => {
    Object.keys(cronogramaPorDia[f]).forEach(h => todasLasHoras.add(h));
  });
  const horasOrdenadas = Array.from(todasLasHoras).sort((a, b) => {
    const convertir = h => {
      const [h12, suf] = h.split(" ");
      let [hnum, min] = h12.split(":");
      if (!min) min = "00";
      let n = parseInt(hnum, 10);
      if (suf === "p.m." && n !== 12) n += 12;
      if (suf === "a.m." && n === 12) n = 0;
      return n * 60 + parseInt(min, 10);
    };
    return convertir(a) - convertir(b);
  });

  horasOrdenadas.forEach(hora => {
    const fila = tabla.insertRow();
    fila.insertCell().textContent = hora;
    fechas.forEach(fecha => {
      const celda = fila.insertCell();
      celda.textContent = cronogramaPorDia[fecha][hora] || "";
      celda.classList.add("celda-interactiva");
      celda.addEventListener("click", () => {
        celda.classList.toggle("completado");
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", generarTabla);
  "Jueves 07/08": {
    "07:00 a.m.": "Llegada, desayuno personal, bajar a Rosa",
    "08:00 a.m.": "Desayuno a residentes, huevo a Cecilia (revuelto), a Adelina (sancochado)",
    "08:15 a.m.": "Chata y cambio de pañal a Adelina",
    "09:00 a.m.": "Cambio de pañal si no hay baño",
    "10:00 a.m.": "Baño a Cecilia",
    "11:30 a.m.": "Pedir dieta Adelina y segundo especial Cecilia",
    "12:00 p.m.": "Almuerzo (Cecilia sopa en vaso)",
    "03:00 p.m.": "Dar comida licuada a Dora",
    "05:00 p.m.": "Cena",
    "07:00 p.m.": "2 puffs y lágrimas a Adelina, oxígeno a Dora",
    "08:15 p.m.": "Chata y pañal a Adelina",
    "10:00 p.m.": "Luces apagadas, descanso"
  },
  "Viernes 08/08": {
    "12:00 a.m.": "Rondas",
    "04:00 a.m.": "Cambio de pañal Dilma, lavado Adelina y Dora",
    "04:30 a.m.": "Signos vitales Adelina, Iris, Dilma y paciente frente",
    "06:00 a.m.": "Baño personal, sacar basura",
    "07:00 a.m.": "Desayuno personal, bajar a Rosa",
    "08:00 a.m.": "Desayuno residentes",
    "08:15 a.m.": "Pañal y chata Adelina",
    "09:30 a.m.": "Baño a Adelina",
    "10:30 a.m.": "Baño a Dilma o Iris (turno alternado)",
    "11:30 a.m.": "Pedir dieta y segundo",
    "12:00 p.m.": "Almuerzo",
    "03:00 p.m.": "Dar comida licuada a Dora",
    "05:00 p.m.": "Cena",
    "08:15 p.m.": "Chata y pañal Adelina",
    "10:00 p.m.": "Luces apagadas"
  },
  "Lunes 11/08": {
    "07:00 a.m.": "Llegada, desayuno personal",
    "08:00 a.m.": "Desayuno residentes",
    "08:15 a.m.": "Chata y pañal Adelina",
    "09:00 a.m.": "Cambio pañal Adelina si no hay baño",
    "10:00 a.m.": "Baño a Cecilia",
    "11:30 a.m.": "Pedir dieta y segundo",
    "12:00 p.m.": "Almuerzo",
    "03:00 p.m.": "Dar comida licuada a Dora",
    "05:00 p.m.": "Cena",
    "07:00 p.m.": "2 puffs y lágrimas Adelina",
    "08:15 p.m.": "Chata y pañal Adelina",
    "10:00 p.m.": "Luces apagadas"
  },
  "Martes 12/08": {
    "12:00 a.m.": "Revisión pacientes",
    "04:00 a.m.": "Lavado y pañal Adelina, Dora; Dilma",
    "04:30 a.m.": "Signos vitales (Adelina, Dilma, Iris, otra)",
    "06:00 a.m.": "Baño personal, sacar basura",
    "07:00 a.m.": "Desayuno personal, bajar Rosa",
    "08:00 a.m.": "Desayuno residentes",
    "08:15 a.m.": "Chata y pañal Adelina",
    "09:30 a.m.": "Baño a Adelina (martes)",
    "10:30 a.m.": "Baño a Iris o Dilma (según turno)",
    "11:30 a.m.": "Pedir dieta y segundo",
    "12:00 p.m.": "Almuerzo",
    "03:00 p.m.": "Dar comida licuada a Dora",
    "05:00 p.m.": "Cena",
    "08:15 p.m.": "Chata y pañal Adelina",
    "10:00 p.m.": "Luces apagadas"
  },
  "Viernes 15/08": {
    "07:00 a.m.": "Inicio de turno, desayuno personal",
    "08:00 a.m.": "Desayuno residentes",
    "08:15 a.m.": "Pañal y chata Adelina",
    "09:30 a.m.": "Baño a Adelina (viernes)",
    "10:30 a.m.": "Baño a Cecilia",
    "11:30 a.m.": "Pedir dieta Adelina y 2do Cecilia",
    "12:00 p.m.": "Almuerzo",
    "03:00 p.m.": "Dar comida licuada a Dora",
    "05:00 p.m.": "Cena",
    "08:15 p.m.": "Pañal Adelina",
    "10:00 p.m.": "Luces apagadas"
  },
  "Sábado 16/08": {
    "12:00 a.m.": "Rondas generales",
    "04:00 a.m.": "Cambio de pañal y lavado a Dora, Adelina y Dilma",
    "04:30 a.m.": "Signos vitales 4 pacientes",
    "06:00 a.m.": "Baño personal, basura",
    "07:00 a.m.": "Desayuno personal, bajar Rosa",
    "08:00 a.m.": "Desayuno residentes",
    "08:15 a.m.": "Pañal y chata Adelina",
    "10:30 a.m.": "Baño a Iris o Dilma (alternado)",
    "11:30 a.m.": "Pedir dieta y segundo",
    "12:00 p.m.": "Almuerzo",
    "03:00 p.m.": "Comida Dora",
    "05:00 p.m.": "Cena",
    "08:15 p.m.": "Chata Adelina",
    "10:00 p.m.": "Luces apagadas"
  }
