
function goToTable() {
   event.preventDefault()

   alert('Do you consent your details to be processed ?')

   // Table value code
   let myHtml =
   
    `  <div >
       <table>
        <tr>
        <th>FirstName</th>
        <th>Surname</th>
        <th>Phone</th> 
        <th>Email</th>
        <th>City</th>
        <th>Country</th>
        </tr>
     
         <tr> 
      <td> ${document.getElementById('firstName').value}</td> 
      <td> ${document.getElementById('surName').value}</td>
      <td> ${document.getElementById('phoneNum').value}</td>
      <td> ${document.getElementById('emailAdd').value}</td>
      <td> ${document.getElementById('cityName').value}</td>
      <td> ${document.getElementById('countryName').value}</td>
      </tr> 
     </table> 
   </div> 
   `
   document.getElementById("myTableBox").innerHTML =  myHtml
   
   
   let tableBoxes = document.getElementsByTagName('table');
    
   tableBoxes[0].style.width = "100%";
   tableBoxes[0].style.padding = '1rem';
   tableBoxes[0].style.margin = 'auto';
  
   
   let tableRow = document.getElementsByTagName('tr');
   
    for(let i = 0; i < tableRow.length; i++ ){
       tableRow[i].style.border = '2px solid black';
    }
   
    let tableHeader = document.getElementsByTagName('th');
    for(let i = 0; i < tableHeader.length; i++ ){
       tableHeader[i].style.border = '2px solid black';
    }
   
    let tableData = document.getElementsByTagName('td');
    for(let i = 0; i < tableData.length; i++ ){
       tableData[i].style.border = '2px solid black';
    }  
   
    // Check box code
let myChkBox = `
<div>

<span>
<input type="checkbox" id="checkBox" onclick= navToPage()>

</span>
<span>
<p>Check this box to confirm your details and complete your submission </p>
</span>
</div>
`
document.getElementById("chkBoxPosition").innerHTML = myChkBox


function navToPage() {

   event.preventDefault()

   window.location.href = "confirmation.html";
}  
 
   
    } 
    


// This code navigate to confirmation page

//function navToPage(event) {

   //event.preventDefault()

  // window.location.href = "confirmation.html";
//} 
 
//let displayTable = document.getElementById('checkBox');
//displayTable.addEventListener('click', navToPage);


  