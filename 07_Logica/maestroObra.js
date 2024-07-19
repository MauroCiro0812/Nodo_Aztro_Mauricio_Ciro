document.getElementById('obraForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores del formulario
    let anchoPared = parseFloat(document.getElementById('anchoPared').value);
    let altoPared = parseFloat(document.getElementById('altoPared').value);
    let largoLadrillo = parseFloat(document.getElementById('largoLadrillo').value);
    let altoLadrillo = parseFloat(document.getElementById('altoLadrillo').value);

    // Calcular área de la pared
    let areaPared = anchoPared * altoPared;

    // Calcular área de un ladrillo
    let areaLadrillo = largoLadrillo * altoLadrillo;

    // Calcular número de ladrillos necesarios
    let numLadrillos = Math.ceil(areaPared / areaLadrillo); // Redondear hacia arriba

    // Mostrar resultado
    document.getElementById('resultado').innerText = `Número de ladrillos necesarios: ${numLadrillos}`;
});
