// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listadeamigos = [];
let listadeSorteados = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;
    if (listadeamigos.includes(nombre)) {
        alert("Este amigo ya está en la lista");
        return;
    }else if (nombre === "") {
        alert("Ingresa un nombre válido");
        return;
    }
    listadeamigos.push(nombre);
    let lista = document.getElementById("listaAmigos");
    let li = document.createElement("li");
    li.innerText = nombre;
    lista.appendChild(li);
    document.getElementById("amigo").value = "";
    console.log(listadeamigos);
}
function sortearAmigo() {
    if (listadeamigos.length < 2) {
        alert("Debes agregar al menos dos amigos para sortear");
        return;
    }
    let indicedeamigossorteado = Math.floor(Math.random() * listadeamigos.length);
    let amigossorteado = listadeamigos[indicedeamigossorteado];
    if (listadeamigos.length === listadeSorteados.length) {
        alert("Todos los amigos ya han sido sorteados");
        return;
    } else if (listadeSorteados.includes(amigossorteado)) {
        while (!listadeSorteados.includes(amigossorteado)) {
            amigoSecreto = listadeamigos[Math.floor(Math.random() * listadeamigos.length)];
        }
    }
    listadeSorteados.push(amigossorteado);
    document.getElementById("resultado").innerText = "El amigo secreto es: " + amigossorteado;
}
