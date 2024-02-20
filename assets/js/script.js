 
 /* function createTable() {
   
    document.write( ` <table>
   <tr>
   <th>FirstName</th>
  <th>Surname</th>
  <th>Phone</th> 
  <th>Email</th>
  <th>City</th>
   <th>Country</th>
   </tr>
  <tr> 
  <td>Fred</td> 
  <td>Thanxman</td>
  <td>07383202020</td>
  <td>thanxman@gmail.com</td>
   <td>london</td>
   <td>England</td>
   </tr> 
   <tr> 
  <td>Alfa</td> 
  <td>Tangoman</td>
  <td>07282212223</td>
  <td>tangoman@gmail.com</td>
   <td>Glasgow</td>
   <td>Scotland</td>
   </tr> 
   </table> `)
          

let tableBoxes = document.getElementById('tableBox');
tableBoxes.innerHTML = ` <table>
<tr>
<th>FirstName</th>
<th>Surname</th>
<th>Phone</th> 
<th>Email</th>
<th>City</th>
<th>Country</th>
</tr>
<tr> 
<td>Fred</td> 
<td>Thanxman</td>
<td>07383202020</td>
<td>thanxman@gmail.com</td>
<td>london</td>
<td>England</td>
</tr> 
<tr> 
<td>Alfa</td> 
<td>Tangoman</td>
<td>07282212223</td>
<td>tangoman@gmail.com</td>
<td>Glasgow</td>
<td>Scotland</td>
</tr> 
</table> `

tableBoxes.style.width = "30%";
tableBoxes.style.display = 'grid';
tableBoxes.style.padding = '1rem';

let tableRow = document.getElementsByTagName('tr');

 for(let i = 0; i < tableRow.length; i++ ){
    tableRow[i].style.border = '1px solid black';
 }

 let tableHeader = document.getElementsByTagName('th');
 for(let i = 0; i < tableHeader.length; i++ ){
    tableHeader[i].style.border = '1px solid black';
 }

 let tableData = document.getElementsByTagName('td');
 for(let i = 0; i < tableData.length; i++ ){
    tableData[i].style.border = '1px solid black';
 }
};

*/

function makeTable(event) {

   let tableBoxes = document.getElementById('tableBox');
   tableBoxes.innerHTML = ` <table>
   <tr>
   <th>FirstName</th>
   <th>Surname</th>
   <th>Phone</th> 
   <th>Email</th>
   <th>City</th>
   <th>Country</th>
   </tr>
   <tr> 
   <td>Fred</td> 
   <td>Thanxman</td>
   <td>07383202020</td>
   <td>thanxman@gmail.com</td>
   <td>london</td>
   <td>England</td>
   </tr> 
   <tr> 
   <td>Alfa</td> 
   <td>Tangoman</td>
   <td>07282212223</td>
   <td>tangoman@gmail.com</td>
   <td>Glasgow</td>
   <td>Scotland</td>
   </tr> 
   </table> `
   
   tableBoxes.style.width = "30%";
   tableBoxes.style.display = 'grid';
   tableBoxes.style.padding = '1rem';
   
   let tableRow = document.getElementsByTagName('tr');
   
    for(let i = 0; i < tableRow.length; i++ ){
       tableRow[i].style.border = '1px solid black';
    }
   
    let tableHeader = document.getElementsByTagName('th');
    for(let i = 0; i < tableHeader.length; i++ ){
       tableHeader[i].style.border = '1px solid black';
    }
   
    let tableData = document.getElementsByTagName('td');
    for(let i = 0; i < tableData.length; i++ ){
       tableData[i].style.border = '1px solid black';
    }
};

let buttonBox = document.getElementById('tableBtn');
/* the value of this is  the variable "buttonBox" which triggers the event. */
this.addEventListener('click', makeTable);


/* This code opens the form page */

function openTheForm(event) {
   event.preventDefault();

window.open('form.html');

}

let formPage = document.getElementById('toTheForm');
formPage.addEventListener('click', openTheForm);