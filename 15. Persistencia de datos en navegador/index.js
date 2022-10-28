const nombre = "Fernando"
const apellido = "Barroso"
const persona = { 
    nombre: "Fernando",
    apellido: "Barroso"
}

sessionStorage.setItem("persona", JSON.stringify(persona))
localStorage.setItem("persona", JSON.stringify(persona))

const hora = new Date()
document.cookie = `persona=${JSON.stringify(persona)};expires=${new Date(hora.getTime() + 2 * 60000)}`
