function funcionaP(){

    let precios = {
        Cafes   : [1.75, 1.20, 1.80, 1.75],
        Cervezas: [2.00,1.90,2.50,1.40],
        Coktails: [7.00,8.00,5.00,9.00],
        Vinos   : [15.00,1.80,1.85,12.00]
   };

   let bebidas = {
      cafes:["Cafe-Con-Leche","Cafe-Solo","Cafe-Bombon","Cafe-Descafeinado"],
      Cervezas:["Cerveza-Peroni","Cerveza-Estrella-Galicia","Cerveza-Dorada-Especial","Cerveza-Tropical"],

   }

    //Selecciona todo los elementos con la clase descCafe
    let element = document.getElementsByClassName("descCafe");

    //iteramos sobre los elementos encontrados de los cafes
    for (let i = 0; i < element.length; i++){
      element[i].innerHTML = `<p>${precios.Cafes[i]} € - ${bebidas.cafes[i]}</p>`;
      console.log(i)
      console.log(precios.Cafes[i]) 
      console.log(precios.Cafes[i]) 
    }

    
    //Selecciona todo los elementos con la clase descCafe
    let element2 = document.getElementsByClassName("descCervezas");

    //iteramos sobre los elementos encontrados de las cervezas
    for (let j = 0; j < element2.length; j++){
      element2[j].innerHTML = `<p>${precios.Cervezas[j]} € - ${bebidas.Cervezas[j]}</p>`;
      console.log(j)
      console.log(precios.Cafes[j]) 
      console.log(precios.Cafes[j]) 
    }

}


