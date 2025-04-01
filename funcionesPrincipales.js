/*Simulacion de funciones de una app para un restaurante*/

class ControlCentral{
    /*constructor principal*/
    constructor (bebidas,index,precio){
        this.bebidas = bebidas;
        this.index = index;
        this.precio = precio;
    }

    /*Esta funcion se encarga de agrupar una serie de bebidas del restaurante*/
     ListasBebidas(bebidas,index,precio){

        switch(bebidas){
          case "Cafes": 
              /*Esta opcion seria para la seleccion de los cafes.
              ¿Como funciona?
              -Esto funciona gracias a los indices de un array, cuando el camarero selecciona 
              la opcion de "Cafes" entonces automaticamente la funcion recibe una opcion de bebida 
              y seguidamente el index de la posicion del array en el que se encuantra.
              */
               let listaCafes = ["cafe-con-leche","cafe-Solo","cafe-Bombon","cafe-Con-Leche-Descafeinado"];
              return (listaCafes[index]!= undefined) ? `${listaCafes[index]} ${precio}€`: "Producto no Disponible 0.0 €";
        
          break;
        
          case "Cervezas":
        
        
          let listaCervezas = ["Peroni","Estrella-Galicia","Dorada-Special","Tropical"];
          return (listaCervezas[index]!= undefined) ? `${listaCervezas[index]} ${precio}€`: "Producto no Disponible 0.0 €";
        
          break;
        
          case "Coktails":
        
          let listaCoktails = ["Mojito","Sant-Marti","Tequila","Start-Blue"];
          return (listaCoktails[index]!= undefined) ? `${listaCoktails[index]} ${precio}€`: "Producto no Disponible 0.0 €";
        
          break;
        
          case "Vinos":
        
          let listaVinos = ["Rioja(15-años)","Copa-de-blanco","Copa-de-tinto","Tinto-Verano"];
          return (listaVinos[index]!= undefined) ? `${listaVinos[index]} ${precio}€`: "Producto no Disponible 0.0 €";
        
          break;
        
          default:
              console.log("No disponemos de esa opcion")
          break
          }
        }
        
        /*Esta otra funcion se encarga de hacer una solicitud de las bebidas disponibles*/
          precio(tipo,index){
             let precios = {
                  Cafes   : [1.75, 1.20, 1.80, 1.75],
                  Cervezas: [2.00,1.90,2.50,1.40],
                  Coktails: [7.00,8.00,5.00,9.00],
                  Vinos   : [15.00,1.80,1.85,12.00]
             };
        return precios[tipo]?.[index] ?? 0.0;
        }
    
}

window.ControlCentral = ControlCentral;



