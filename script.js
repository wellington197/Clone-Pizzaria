//Criar um função anônima

const c=(el)=>document.querySelector(el);
const cs=(el)=>document.querySelectorall(el);

//Função de mapeamento do item
pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    //preencher as informações em pizzaitem

    //Listar as pizzas na área 
    c('.pizza-area').append(pizzaItem);
});