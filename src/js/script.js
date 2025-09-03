// DECLARANDO AS VARIAVEIS COM DOM (DOCUMENT MODEL OBJECT)
const carrosselLista = document.querySelector(".carrossel-lista");
const carrosselItem = document.querySelectorAll(".carrossel-item");
const botaoAnterior =document.getElementsByClassName("btn-anterior");
const botaoProximo =document.getElementsByClassName("btn-proximo");

let contador=0;
const larguraItem=carrosselItem[0].offsetWitdh +10;// largura do item + margem

botaoProximo.addEventListener("click",()=>{
    if(contador <carrosselItem.length -1){
        contador++;
        carrosselLista.style.transform =`translateX(-${contador * larguraItem}px)`;
    }
})

botaoAnterior.addEventListener("click",()=>{
    if(contador > 0){
        contador--;
        carrosselLista.style.transform =`translateX(-${contador * larguraItem}px)`;
    }
})