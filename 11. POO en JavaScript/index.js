class Estudiante {
    constructor(nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = ["Javascript", "HTML", "CSS"]   
    } 
    obtenDatos () {
        console.log(`Mi nombre es ${this.nombre} y mis asignaturas son ${this.asignaturas}`)
    }
}

const estudiante = new Estudiante("Fernando")
estudiante.obtenDatos()
