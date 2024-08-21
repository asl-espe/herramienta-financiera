// Función para calcular el precio final por unidad
function calcularPrecioFinal(materiaPrima, costosAdicionales, margen) {
    const costoTotal = materiaPrima + costosAdicionales;
    const precioFinal = costoTotal + (costoTotal * (margen / 100));
    return precioFinal;
}

// Función para calcular el total de ingresos
function calcularTotalIngresos(unidadesVendidas, precioPorUnidad) {
    return unidadesVendidas * precioPorUnidad;
}

// Función para calcular el total de gastos
function calcularTotalGastos(materiaPrimaTotal, costosAdicionalesTotales) {
    return materiaPrimaTotal + costosAdicionalesTotales;
}

// Función para calcular el balance (ingresos - gastos)
function calcularBalance(totalIngresos, totalGastos) {
    return totalIngresos - totalGastos;
}

// Función principal para generar el reporte financiero
function generarReporteFinanciero(materiaPrima, costosAdicionales, margen, unidadesVendidas) {
    // Calcular el precio final por unidad
    const precioPorUnidad = calcularPrecioFinal(materiaPrima, costosAdicionales, margen);

    // Calcular ingresos totales
    const totalIngresos = calcularTotalIngresos(unidadesVendidas, precioPorUnidad);

    // Calcular gastos totales
    const totalGastos = calcularTotalGastos(materiaPrima * unidadesVendidas, costosAdicionales * unidadesVendidas);

    // Calcular balance
    const balance = calcularBalance(totalIngresos, totalGastos);

    // Retornar el reporte financiero
    return {
        precioPorUnidad: precioPorUnidad,
        totalIngresos: totalIngresos,
        totalGastos: totalGastos,
        balance: balance
    };
}

// Ejemplo de uso:
const materiaPrima = 10; // Costo de materia prima por unidad
const costosAdicionales = 5; // Costos adicionales por unidad
const margen = 20; // Margen de ganancia en porcentaje
const unidadesVendidas = 100; // Número de unidades vendidas

const reporte = generarReporteFinanciero(materiaPrima, costosAdicionales, margen, unidadesVendidas);

console.log("Reporte Financiero:");
console.log(`Precio por Unidad: $${reporte.precioPorUnidad}`);
console.log(`Total Ingresos: $${reporte.totalIngresos}`);
console.log(`Total Gastos: $${reporte.totalGastos}`);
console.log(`Balance: $${reporte.balance}`);
