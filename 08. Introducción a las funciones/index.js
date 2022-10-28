function sinParametros(){
    return true
}

function asincrona (){
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

function* generadorID (){
    let id = 0
    while (true){
        id = id + 2
        yield id
    }
}

const newID = generadorID();