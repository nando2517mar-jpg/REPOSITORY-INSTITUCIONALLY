// 1. EL DICCIONARIO INTERNO CON 10 TEMAS ÚNICOS
const TEMAS_BIBLICOS = {
    // 1. Amor
    "AMOR": "El amor es paciente, es bondadoso; no tiene envidia, no se jacta, no es orgulloso. (1 Corintios 13:4)", 
    // 2. Fuerza
    "FUERZA": "Todo lo puedo en Cristo que me fortalece. (Filipenses 4:13)", 
    // 3. Fe
    "FE": "Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. (Hebreos 11:1)",
    // 4. Paz
    "PAZ": "La paz os dejo, mi paz os doy; yo no os la doy como el mundo la da. No se turbe vuestro corazón, ni tenga miedo. (Juan 14:27)",
    // 5. Perdón
    "PERDON": "Si confesamos nuestros pecados, él es fiel y justo para perdonar nuestros pecados, y limpiarnos de toda maldad. (1 Juan 1:9)",
    // 6. Consuelo
    "CONSUELO": "Bendito sea el Dios y Padre de nuestro Señor Jesucristo, Padre de misericordias y Dios de toda consolación. (2 Corintios 1:3)",
    // 7. Sabiduría
    "SABIDURIA": "Si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada. (Santiago 1:5)",
    // 8. Esperanza
    "ESPERANZA": "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas. (Isaías 40:31)",
    // 9. Oración
    "ORACION": "Pedid, y se os dará; buscad, y hallaréis; llamad, y se os abrirá. (Mateo 7:7)",
    // 10. Protección
    "PROTECCION": "Jehová es mi luz y mi salvación; ¿de quién temeré? (Salmos 27:1)"
};
// 2. LA FUNCIÓN INTERACTIVA
function buscarVersiculo() {
    // Función para cargar los temas disponibles en la lista al inicio
function cargarTemasDisponibles() {
    // 1. Obtener la lista <ul> por su ID
    const listaTemasElement = document.getElementById('listaTemas');
    
    // 2. Obtener solo las claves (los temas) del diccionario
    const temas = Object.keys(TEMAS_BIBLICOS);
    
    let listaHTML = '';
    
    // 3. Recorrer cada tema y crear un elemento <li>
    temas.forEach(tema => {
        // Muestra el tema en minúsculas y capitalizado para que se vea bonito
        const temaFormateado = tema.charAt(0) + tema.slice(1).toLowerCase();
        
        listaHTML += `<li>${temaFormateado}</li>`;
    });
    
    // 4. Insertar todo el HTML generado en el elemento <ul>
    listaTemasElement.innerHTML = listaHTML;
}

// Llama a la función automáticamente cuando el script se carga
cargarTemasDisponibles();

// Referencias a los elementos HTML
const inputElement = document.getElementById('temaInput')
const resultadoElement = document.getElementById('resultado')

// Normalizar la entrada del usuario: Mayúsculas y sin espacios extra.
const temaBuscado = inputElement.value.toUpperCase().trim();
let mensajeResultado= "";

// 3. Lógica de búsqueda

if (TEMAS_BIBLICOS[temaBuscado]) {
    // Tema encontrado 
    mensajeResultado = `<p class="exito amen"> Versiculo sobre **${temaBuscado}**:</p>
                        <p class="cita">"${TEMAS_BIBLICOS[temaBuscado]}"</p>`;
}
else {
    // Tema NO encontrado 
    const temasDisponibles = Object.keys(TEMAS_BIBLICOS).join(", ");

    mensajeResultado = `<p class="error">Lo siento, el tema "${temaBuscado}" no está en la lista.</p>
                        <p>Temas disponibles: ${temasDisponibles}</p>`;
}

// 4. Mostrar el resultado en la página
resultadoElement.innerHTML = mensajeResultado;

}