document.getElementById('liquidacionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    let diasTrabajados = parseInt(document.getElementById('diasTrabajados').value);
    let horasExtrasDiurnas = parseInt(document.getElementById('horasExtrasDiurnas').value);
    let horasExtrasNocturnas = parseInt(document.getElementById('horasExtrasNocturnas').value);
    let horasExtrasFestivos = parseInt(document.getElementById('horasExtrasFestivos').value);

    // Valores por conceptos
    const valorDiaTrabajado = 43000;
    const valorHoraExtraDiurna = 6915;
    const valorHoraExtraNocturna = 9681;
    const valorHoraExtraFestivo = 11064;

    // Calcular salario base
    let salarioBase = diasTrabajados * valorDiaTrabajado;

    // Calcular valor de las horas extras
    let valorHorasExtras = horasExtrasDiurnas * valorHoraExtraDiurna +
                           horasExtrasNocturnas * valorHoraExtraNocturna +
                           horasExtrasFestivos * valorHoraExtraFestivo;

    // Calcular salario total antes de descuentos
    let salarioTotal = salarioBase + valorHorasExtras;

    // Calcular descuentos
    let descuentoSalud = salarioTotal * 0.04;
    let descuentoPension = salarioTotal * 0.04;
    let descuentoAlimentacion = salarioTotal * 0.03;

    // Calcular salario neto
    let salarioNeto = salarioTotal - descuentoSalud - descuentoPension - descuentoAlimentacion;

    // Mostrar resultado
    let resultadoHTML = `
        <p>Salario base (sin horas extras): $${salarioBase}</p>
        <p>Valor total horas extras: $${valorHorasExtras}</p>
        <p>Salario total antes de descuentos: $${salarioTotal}</p>
        <p>Descuento por salud (4%): $${descuentoSalud.toFixed(2)}</p>
        <p>Descuento por pensión (4%): $${descuentoPension.toFixed(2)}</p>
        <p>Deducible por alimentación (3%): $${descuentoAlimentacion.toFixed(2)}</p>
        <h3>Salario neto a pagar: $${salarioNeto.toFixed(2)}</h3>
    `;

    document.getElementById('resultado').innerHTML = resultadoHTML;
});
