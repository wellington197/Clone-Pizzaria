//Criar um função anônima
/*
const c=(el)=>document.querySelector(el);
const cs=(el)=>document.querySelectorall(el);*/

const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);


//Função de mapeamento do item no arquivo JSon
pizzaJson.map((item, index)=>{
    //preencher as informações em pizzaitem
    let pizzaItem = c('.models .pizza-item').cloneNode(true);


    // setando a chave da pizza em específico para saber qual item eu cliquei
    pizzaItem.setAttribute('data-key', index);




    /*Área de inserção das informçãoes no modal das pizzas*/

    //selecionando imagem na tela para substituição das imagens da pizza. Neste campo tem de buscar a TAG img
    pizzaItem.querySelector('.pizza-item--img img').src=item.img;
    //selecionando o prço do item. Usando também o template String
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    //selecionando o prço do item. Usando também o template String
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    
    //selecionando o prço do item. Usando também o template String
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;


    //Criar evento para criar Modal
    pizzaItem.querySelector('a').addEventListener('click',(e)=>{
        e.preventDefault();

        
        let key=e.target.closest('.pizza-item').getAttribute('data-key');



            /*Inserindo os itens no pizzaWindowArea*/
            c('.pizzaBig img').src=pizzaJson[key].img;
            c('.pizzaInfo h1').innerHTML=pizzaJson[key].name;
            c('.pizzaInfo--desc').innerHTML=pizzaJson[key].description;
            c('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;

            //remover a seleção do botão select
            c('.pizzaInfo--size.selected').classList.remove('selected');
            //inserindo o peso das pizzas
            cs('.pizzaInfo--size').forEach((size, sizeIndex)=>{
                if(sizeIndex == 2){
                    size.classList.add('selected');
                }

                size.querySelector('span').innerHTML=pizzaJson[key].sizes[sizeIndex];
            });



            /*Área de inserção do tempo de transição da janela ao clicar nas pizzas*/
            c('.pizzaWindowArea').style.opacity=0;
            c('.pizzaWindowArea').style.display='flex';

                //Setar tempo para a transição da janela do carrinho na sua abertura
                setTimeout(()=>{
                    c('.pizzaWindowArea').style.opacity=1;
                },200);
            


            })

            //Listar as pizzas na área 
            c('.pizza-area').append(pizzaItem);


});//fim do mapeamento de item

