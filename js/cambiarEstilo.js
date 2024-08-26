/* Función para cambiar de una hoja de estilo a otra */
function cambiarEstilo(estilo) {
    document.getElementById('estilo1').disabled = true;
    document.getElementById('estilo2').disabled = true;
    document.getElementById(estilo).disabled = false;
}
