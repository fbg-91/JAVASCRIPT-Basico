function fibonacci (num){
    let secuencia = [0, 1]
    for (let i = 2; i < num; i++){
        secuencia.push(secuencia[i - 1] + secuencia[i - 2])
    }
    return secuencia
}

console.log(fibonacci(15))