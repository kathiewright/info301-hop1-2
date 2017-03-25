/*
  Project:   Hands-On Project 1-2
	Author:    
	Date:      
	Purpose:   To illustrate variable initialization and use in a method
*/

//initialize variables for service names and speeds

var service1Name = "Basic";
var service2Name = "Express";
var service3Name = "Extreme";
var service4Name = "Ultimate";
var service1Speed = 5;
var service2Speed = 25;
var service3Speed = 50;
var service4Speed = 150;


/* use document.write statements to create HTML5 table rows and cells
   Each row should display the service name in the first cell
   and the service speed in the second cell  */

document.write("<tr><td>"); // Creates a new table row <tr> and first table cell <td>
document.write(service1Name); // Writes out the value stored in service1Name */
document.write("</td>");
document.write("<td>"); // Creates a second table cell in the same row 
document.write(service1Speed);
document.write("</td></tr>"); // Ends the table row 

document.write("<tr><td>");
document.write(service2Name);
document.write("</td>");
document.write("<td>");
document.write(service2Speed);
document.write("</td></tr>");

document.write("<tr><td>");
document.write(service3Name);
document.write("</td>");
document.write("<td>");
document.write(service3Speed);
document.write("</td></tr>");

document.write("<tr><td>");
document.write(service4Name);
document.write("</td>");
document.write("<td>");
document.write(service4Speed);
document.write("</td></tr>");
