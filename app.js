
const listaNombres = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor ingresa un nombre válido.");
        return;
    }

    listaNombres.push(nombre);

    // Limpiar el input
    input.value = "";
    input.focus();

    // Actualizar la lista visual
    mostrarLista();
}

function mostrarLista() {
    const ul = document.getElementById("listaAmigos");
    ul.innerHTML = ""; // Limpiar contenido anterior

    listaNombres.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (listaNombres.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    const nombreSorteado = listaNombres[indiceAleatorio];

    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${nombreSorteado}`;
    resultado.appendChild(li);
}

