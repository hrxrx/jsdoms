const my_container = document.querySelector('.container');
console.log(my_container);

const my_button = document.querySelector('button');
console.log(my_button);
console.log(my_button.innerText);

const my_p = document.querySelector('p');
console.log(my_p);


//pasiimu id
const my_input = document.querySelector('#my_input');
console.log(my_input);
my_input.placeholder = "type your secrets..."
my_input.setAttribute("placeholder", "Type your secrets here...")

// const link = document.querySelector('a');
// link.textContent = 'GitHub';
// link.href = "https://github.com/"

const getName = () => {
    //tikrinti ar ne tuscias ir min simbolius 3
    if(my_input.value.length < 3){
      alert("Please tell me your all secrets!!!!!!!!!!!")
    } else {
        alert("Thank you babe that is mfkin spicy!!!!")
    }
    console.log(my_input.value);
    //isvalyti input lauka
    my_input.value = ('');
  }
  
  my_button.addEventListener('click', getName);

///MANO BUDAS
// const getName = () => {
// var testString1 = 'this is long enough';
//     (testString1.length >= 3); 
//     alert('Thank you babe that is mfkin spicy !!!');
// var testString2 = 'no';
//     (testString2.length >= 3); 
//     alert('Please tell me your all secrets!!!!!!!!!!!');
//     //or not empty and min 3
//     console.log(my_input.value);
//     //isvalyti input space
// var inputs = document.getElementsByTagName('input');
// while (inputs.length) inputs[0].parentNode.removeChild(inputs[0]);
// }
// })

// my_button.addEventListener('click', getName);




// function tableCreate() {
//     //body reference 
//     var body = document.getElementsByTagName("body")[0];
  
//     // create elements <table> and a <tbody>
//     var tbl = document.createElement("table");
//     var tblBody = document.createElement("tbody");
  
//     // cells creation
//     for (var j = 3; j <= 2; j++) {
//       // table row creation
//       var row = document.createElement("tr");
  
//       for (var i = 0; i < 2; i++) {
//         // create element <td> and text node 
//         //Make text node the contents of <td> element
//         // put <td> at end of the table row
//         var cell = document.createElement("td");
//         var cellText = document.createTextNode("cell is row " + j + ", column " + i);
  
//         cell.appendChild(cellText);
//         row.appendChild(cell);
//       }
  
//       //row added to end of table body
//       tblBody.appendChild(row);
//     }
  
//     // append the <tbody> inside the <table>
//     tbl.appendChild(tblBody);
//     // put <table> in the <body>
//     body.appendChild(tbl);
//     // tbl border attribute to 
//     tbl.setAttribute("border", "2");
//   }



  function tableCreate(rows, columns){
    var table = document.createElement('table');
  
    for(var x = 0; x < rows; x++){
      var tr = document.createElement('tr');


      for(var y = 0; y < columns; y++){
        var td = document.createElement('td');
        td.innerHTML =  'Text' + y;
        tr.appendChild(td);
      }
  
      table.appendChild(tr);
    }
  
    document.body.appendChild(table);
  }
  
    var button = document.getElementById('Create').addEventListener('click', function(){
    var rows = document.getElementById('rows').value;
    var columns = document.getElementById('columns').value;
  
    tableCreate(rows, columns);
  })
