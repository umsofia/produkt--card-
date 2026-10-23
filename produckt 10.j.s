const product=[
    { 
        title:"Увложняющий мусс",
        description:" Глубоко увлажняют кожу лица, оставляя её мягкой и гладкой.",
        price:"2750 р.",
        structure:"активные натуральные комплексы 
                  витамины С, А, РР, В И Е
                  солнцезащитные компоненты"
    }
    {   
        title:"Увложняющяя маска"
        description:"Способствует удерживанию влаги в верхних слоях кожи."
        price:"3500 р."
    }   structure:"воски
                   минералы
                   масла"
    { 
        title:"Увложняющий мусс"
        description:"Интенсивно очищает, не повреждает защитный барьер кожи."
        price:"1650 р."
        structure:"минералы
                   витамины С, А, РР, В И Е
                   солнцезащитные компоненты"
                  
                  
    }
     { 
        title:"Подарочный набор №1"
        price:"4700 р."
        description:"Набор, состоящий из увлажняющего крема и маски."
        structure:"воски
                   минералы
                   масла"
    }
     { 
        title:"Подарочный набор №5"
        price:"7500р."
        description:"Весь набор средств Invisible symphony, крем, маска, мусс и гель для
            умывания."
        structure:"активные натуральные комплексы 
                   витамины С, А, РР, В И Е
                   солнцезащитные компоненты"
         
        

    }]
    

    const productTemplate=document.getElementById('produc-template');
    const productList=document.getElementById(product-list);
    product.forEach(product=>{
    const productClone=productTemplate.content.cloneNode(true);
    productClone.quarySelector('.product-name')textContent=`наименоание:${product.name}`
    productClone.quarySelector('.product-price')textContent= `цена:${product.price}`
    productClone.quarySelector('.product-structure')textContent= `состав:${product.structure}`
    productList.apendChild(productClone
    console.log(productList)
    })



    //2.

    const productDescripshion=products.reduce((acc,product)=>{
    acc[product.title]=product.description
      },0 );
      console.log()
