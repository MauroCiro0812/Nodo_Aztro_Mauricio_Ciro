document.getElementById('nadadorForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores de las pruebas
    let tiempo1 = parseInt(document.getElementById('prueba1').value);
    let tiempo2 = parseInt(document.getElementById('prueba2').value);
    let tiempo3 = parseInt(document.getElementById('prueba3').value);
    let tiempo4 = parseInt(document.getElementById('prueba4').value);
    let tiempo5 = parseInt(document.getElementById('prueba5').value);

    // Calcular promedio
    let promedio = (tiempo1 + tiempo2 + tiempo3 + tiempo4 + tiempo5) / 5;

    // Mostrar resultado
    document.getElementById('resultado').innerText = `El promedio de tiempo del nadador es ${promedio.toFixed(2)} segundos.`;
});
