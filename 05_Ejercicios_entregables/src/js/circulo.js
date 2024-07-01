function calcularCirculo() {
    // Obtener los valores de radio y diametro
    var radio = parseFloat(document.getElementById('radio').value);
    var diametro = parseFloat(document.getElementById('diametro').value);
    
    // Calcular el área
    var area = 3.1416 * (radio**2);
    
    // Calcular el perímetro
    var perimetro = diametro * 3.1416;
    
    
    // Mostrar los resultados
    document.getElementById('areaResultado').textContent = area.toFixed(2);
    document.getElementById('perimetroResultado').textContent = perimetro.toFixed(2);
    
}
