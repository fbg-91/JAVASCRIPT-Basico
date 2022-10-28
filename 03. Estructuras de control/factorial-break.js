let factorial = 1;
let i = 1;
while (i > 0){
    i++;
    if(i <= 10){
        factorial = factorial * i;
    }else{
        break;
    }
    console.log(factorial);
}


