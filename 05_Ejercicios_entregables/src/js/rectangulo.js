function calcularRectangulo() {
    // Obtener los valores de base y altura
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);
    
    // Calcular el área
    var area = base * altura;
    
    // Calcular el perímetro
    var perimetro = 2 * (base + altura);
    
    // Calcular la diagonal (opcional)
    var diagonal = Math.sqrt(base * base + altura * altura);
    
    // Mostrar los resultados
    document.getElementById('areaResultado').textContent = area.toFixed(2);
    document.getElementById('perimetroResultado').textContent = perimetro.toFixed(2);
    document.getElementById('diagonalResultado').textContent = diagonal.toFixed(2);
}
