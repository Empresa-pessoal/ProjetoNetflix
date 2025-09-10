// array de objetos com as imagens e informações do banner
const bannerItems = [
    {
        imagem: "./src/assets/Game1.jpg",
        titulo: "Titulo do filme 1",
        descricao: "Filme 1",
    },
    {
        imagem: "./src/assets/Game2.jpg",
        titulo: "Titulo do filme 2",
        descricao: "Filme 2",
    },
    {
        imagem: "./src/assets/Game3.jpg",
        titulo: "Titulo do filme 3",
        descricao: "Filme 3",
    },
];

// declarando as variáveis e elements com dom(document object model)
const tempo = 5000; // em milissegundos
const elementoBanner = document.querySelector(".banner");
const elementoTitulo = document.querySelector(".banner-titulo");
const elementoDescricao = document.querySelector(".banner-descricao");
let i = 0; // inicio da contagem das imagens

// funcao para o slide show
function slideShow(){
    // altera a imagem de fundo do banner
    // `` template strings ou string literais. Forma de concatenar
    elementoBanner.style.backgroundImage = `url(${bannerItems[i].imagem})`;
    
    // altera o titulo do banner
    elementoBanner.textContent = bannerItems[i].titulo;
    elementoDescricao.textContent = bannerItems[i].descricao;

    // incrementa o índice(i) e reinicia quando chegar no final do array
    i++;

    // se i for maior que a quantidade de objetos no bannerItem, volta pra 0
    if (i >= bannerItems.length) {
        i = 0;
    }

    // chama  função novamente após o tempo definido
    setTimeout(slideShow, tempo);
}

// inicia a função
slideShow();