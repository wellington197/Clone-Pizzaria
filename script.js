//Criar um função anônima

const c=(el)=>document.querySelector(el);
const cs=(el)=>document.querySelectorall(el);

//Função de mapeamento do item
pizzaJson.map((item, index)=>{
        //preencher as informações em pizzaitem
    let pizzaItem = c('.models .pizza-item').cloneNode(true);

    //selecionando imagem na tela para substituição das imagens da pizza. Neste campo tem de buscar a TAG img
    pizzaItem.querySelector('.pizza-item--img img').src=item.img;
    //selecionando o prço do item. Usando também o template String
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    //selecionando o prço do item. Usando também o template String
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    
    //selecionando o prço do item. Usando também o template String
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;

    //Listar as pizzas na área 
    c('.pizza-area').append(pizzaItem);


});

