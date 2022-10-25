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

function mayormenor(){

    let mayormenos = document.getElementById('mayormenoslb')
    let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
    
     let arrayordenado = array.sort((a,b)=>{
        return b-a;
     })

    mayormenos.innerHTML = arrayordenado 

}

function genera(){

    let limite = document.getElementById('limite').value
    let listNumeros = document.getElementById('idNumeros')
    let random = [limite]
    let par =0
    let impar =0

    for(let i =0; i<limite;i++){
        
        random[i] = Math.floor(Math.random() * 50)

        listNumeros.options[i] = new Option(random[i], 'texto', random[i])

        if((random[i]%2) == 0){
            par++
        }else{
            impar++
        }



    }

    for(let i =0; i<limite;i++){
        
        

    }

    let pares = document.getElementById('pares')
    let impares = document.getElementById('impares')
    let simetrico = document.getElementById('simetrico')

    console.log(par)

    console.log(((100/limite)*par))
    console.log((100/limite)*impar)

    pares.innerHTML = ((100/limite)*par)+"%"
    impares.innerHTML =((100/limite)*impar)+"%"

    if((100/limite)*par>70 | (100/limite)*par<30){
        simetrico.innerHTML = "El generador no es simetrico"
    }else{
        simetrico.innerHTML = "El generador es simetrico"
    }

}

