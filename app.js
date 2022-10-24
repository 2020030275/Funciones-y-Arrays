function promedio(){

    let prom = document.getElementById('prom')

    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let res = 0

    for(let con = 0; con < array.length; ++con){
        res = res + array[con]
    }

    res = res / array.length;

    prom.innerHTML = res
    
}
function pares(){

    let pares = document.getElementById('pareslb')

    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    let npares = 0

    for(let con=0; con < array.length; ++con){
        if((array[con] %2) == 0){
            npares += 1
        }
    }
       
    pares.innerHTML = npares 
}



