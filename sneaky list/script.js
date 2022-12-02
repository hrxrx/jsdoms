// //elementu susiselectinimas

// const nenumeruotas = document.getElementById("ul_list") 
// console.log(nenumeruotas)

// const numeruotas = document.getElementById("ol_list") 
// console.log(numeruotas)

// const manoMygtukas = document.querySelector("button") 
// console.log(manoMygtukas)



// function createList() {
//   //ar gaunu userio ivestas reiksmes
//   console.log(nenumeruotas.value, numeruotas.value)
//  const manoNenumeruotasListas = document.createElement("ul")
//   //i html insertiname ul
//   document.body.appendChild(manoNenumeruotasListas) 
//    for (let index = 0; index < nenumeruotas.value ; index++){
//        //i html insertiname li itema
//      const manoNenumeruotasLisItem = document.createElement("li");     
//      manoNenumeruotasLisItem.innerText="list itemas";
//      manoNenumeruotasListas.appendChild(manoNenumeruotasLisItem);
//      const ol_list=document.createElement("ol")
//      manoNenumeruotasLisItem.appendChild(ol_list);
//      for (let index = 0; index < numeruotas.value; index++) {
//        const li_item=document.createElement("li")
//        li_item.innerText="list itemas";
//        ol_list.appendChild(li_item)    
//      }   
//    } 
// }
// manoMygtukas.addEventListener(
//   "click", createList)
      



//paizymiu elementus ant kintamuju

const my_custom_rows = document.getElementById('custom_rows');
const my_custom_col = document.getElementById('custom_col');
const my_button = document.querySelector('button');

//deklaruoju funkcija

const createTable = () => {
    console.log("Funkcija veikia");
    //pirmas ciklas kurs eilutes
    console.log(my_custom_rows.value);
    //pirmo ciklo viduje kurs stuilpelius
    console.log(my_custom_rows.value);
    //lentele turiu sukurti viena karta, funkcijai \
    const my_table = document.createElement('table');
    document.body.appendChild(my_table);
    for(let i=0; i < my_custom_rows.value; i++){
        //kuriu eilutes
        const my_rows = document.createElement('tr');
        ///idedu eilutes i lentele
        my_table.appendChild(my_rows);
    }
}

//kvieciu funkcija aprasau mygtukui event
my_button.addEventListener('click', createTable)


