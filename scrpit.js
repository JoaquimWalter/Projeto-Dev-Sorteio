/*
O padrão (Math.ceil e o Math.floor) são utilizados para mostrar um número aleatorio
*/


function generateNumber(){

   const min = Math.ceil(document.querySelector('.input-min').value)
   const max = Math.floor(document.querySelector('.input-max').value)

    const result = Math.floor(Math.random()*(max-min + 1))+min;

    alert("Seu Número Sorteado foi "+ result)
    
}
