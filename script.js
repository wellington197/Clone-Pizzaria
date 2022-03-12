//Criar um função anônima

const c=(el)=>document.querySelector(el);

pizzaJson.map((item, index)=>{
    let pizzaItem = c('.models .pizza-item').cloneNode(true);
    //preencher as informações em pizzaitem

    c('.pizza-area').append(pizzaItem);
});