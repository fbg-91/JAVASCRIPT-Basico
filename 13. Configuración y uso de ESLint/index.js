const nombre = "Fernando"

const apellido = "Barroso"

const estudiante = `${nombre} ${apellido}`

const estudianteMayus = estudiante.toUpperCase

const estudianteMinus = estudiante.toLowerCase

const estudianteLongitud = estudiante.length

const estudiantePrimeraLetra = estudiante.charAt()

const estudianteUltimaLetra = estudiante.charAt(estudiante.length - 1)

const estudianteSinEspacios = estudiante.replace(/ /g, "")

const estudianteBooleano = estudiante.includes(nombre)
