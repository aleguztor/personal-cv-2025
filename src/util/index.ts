export function sucessionOfColor(position: number, length: number) {
  const hue = 195;
  const lightness = 40 + (position / length) * 50; // De 90% (claro) a 40% (oscuro)
  return `linear-gradient(
            190deg,
            rgba(8, 8, 8, 0.548) 0%,
            hsl(${hue}, 60%, ${lightness}%) 100%
        )`;
}

export function calculateTempo(startDate: string) {
  // Asegúrate de que las fechas sean objetos Date
  const currentDate = new Date(); // Fecha actual
  const start = new Date(startDate); // Fecha de inicio (mayo 2022)

  let years = currentDate.getFullYear() - start.getFullYear();
  let months = currentDate.getMonth() - start.getMonth();

  // Si el mes actual es anterior al mes de inicio, restamos un año
  if (months < 0) {
    years--;
    months += 12;
  }

  // Si el día actual es anterior al día de inicio, ajustamos el cálculo de los meses

  if (months < 0) {
    months = 11;
    years--;
  }

  return { years, months };
}
