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
        title:"Увложняющяя маска",
        description:"Способствует удерживанию влаги в верхних слоях кожи",
        structure:["воски,
                   минералы,
                   масла"]
         price:"3500 р.",       
    }
    { 
        title:"Увложняющий мусс",
        description:"Интенсивно очищает, не повреждает защитный барьер кожи.",
        structure:["минералы,
                   витамины С, А, РР, В И Е
                   солнцезащитные компоненты"],
        price:"1650 "
                  
                  
    }
     { 
        title:"Подарочный набор №1",
        description:"Набор, состоящий из увлажняющего крема и маски.",
        structure:["воски,
                   минералы,
                   масла"],
         price:"4700 р."
    }
     { 
        title:"Подарочный набор №5",
        description:"Весь набор средств Invisible symphony, крем, маска, мусс и гель для
         умывания.",
        structure:["активные натуральные комплексы, 
                   витамины С, А, РР, В И Е,
                   солнцезащитные компоненты"],
        price:"7500р.",
         
        

    }]
    

    const productTemplate=document.getElementById('product-template');
    const productList=document.getElementById(product-list);
    products.forEach(product=>{
    const productClone=productTemplate.content.cloneNode(true);
    productClone.quarySelector('.product-name').textContent=`наименоание:${product.name}`
    productClone.quarySelector('.product-price').textContent= `цена:${product.price}`
    productClone.quarySelector('.product-structure').textContent= `состав:${product.structure}`
    productList.apendChild(productClone
    console.log(productList)
    })



    //2.

    const productDescripshion=products.reduce((acc,product)=>{
    acc[product.title]=product.description
      },0 );
      console.log()
