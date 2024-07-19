document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // Calcular IMC
    let imc = peso / (altura * altura);

    // Determinar estado de salud según IMC
    let estadoSalud;
    if (imc < 18.5) {
        estadoSalud = 'Bajo peso';
    } else if (imc < 25) {
        estadoSalud = 'Peso normal';
    } else if (imc < 30) {
        estadoSalud = 'Sobrepeso';
    } else if (imc < 35) {
        estadoSalud = 'Obesidad grado I (ligera)';
    } else if (imc < 40) {
        estadoSalud = 'Obesidad grado II (moderada)';
    } else {
        estadoSalud = 'Obesidad grado III (mórbida)';
    }

    // Mostrar resultado
    let resultado = `Tu IMC es ${imc.toFixed(2)}. Esto se clasifica como: ${estadoSalud}.`;
    document.getElementById('resultado').innerHTML = resultado;
});
