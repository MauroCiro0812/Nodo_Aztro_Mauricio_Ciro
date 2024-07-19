document.getElementById('agronomoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    let baseMayor = parseFloat(document.getElementById('baseMayor').value);
    let baseMenor = parseFloat(document.getElementById('baseMenor').value);
    let altura = parseFloat(document.getElementById('altura').value);

    // Calcular área del terreno trapezoidal
    let area = (baseMayor + baseMenor) / 2 * altura;

    // Calcular cantidad de pesticida requerida (1.5 litros por metro cuadrado)
    let pesticida = area * 1.5;

    // Calcular perímetro del terreno trapezoidal
    let ladoA = baseMayor;
    let ladoB = baseMenor;
    let perimetro = ladoA + ladoB + 2 * Math.sqrt(Math.pow((ladoA - ladoB) / 2, 2) + Math.pow(altura, 2));

    // Calcular longitud de cerca eléctrica necesaria
    let cercaElectrica = perimetro;

    // Mostrar resultados
    document.getElementById('resultadoPesticida').innerText = `Cantidad de pesticida requerida: ${pesticida.toFixed(2)} litros`;
    document.getElementById('resultadoCerca').innerText = `Longitud de cerca eléctrica necesaria: ${cercaElectrica.toFixed(2)} metros`;
});
