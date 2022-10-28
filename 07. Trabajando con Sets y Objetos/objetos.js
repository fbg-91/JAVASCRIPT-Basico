const perfil = {
    nombre: "Fernando",
    apellido: "Barroso",
    edad: 31,
    altura: 175,
    eresDesarrollador: false
};

const varEdad = perfil.edad;

const lista = [{
    ...perfil
    },{
    nombre: "Javier",
    apellido: "Izquierdo",
    edad: 27,
    altura: 170,
    eresDesarrollador: false
    },{
    nombre: "Josue",
    apellido: "Donaire",
    edad: 32,
    altura: 178,
    eresDesarrollador: false
    }]

lista.sort((a, b) => a.edad - b.edad);