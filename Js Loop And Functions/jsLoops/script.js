
    
var students = new Array("Mohit", "Sharma", "Manish", "Minal", "Rohit");

document.write("<b>Using for loops </b><br />");
        
        for (i=0;i<students.length;i++)
		{
		document.write(students[i] + "<br />");
        }


    //********************************************************************************* */    
        document.write("<b>Using while loops </b><br />");
		var i = 0, j = 1, k;
		document.write("Fibonacci series less than 40<br />");
		while(i<40)
		{
			document.write(i + "<br />");
			k = i+j;
			i = j;
			j = k;
		}
//*************************************************************************************** */
        document.write("<b>Using do...while loops </b><br />");
		var i = 2;
		document.write("Even numbers less than 20<br />");
		do
		{
			document.write(i + "<br />");
			i = i + 2;
        }while(i<20)
        



//***************************************************************************************** */
//code of star patterns
var x,y,chr;
document.write("<b>Check console for star pattern program</b>")
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("*");        
      }
 console.log(chr);
 chr='';    
}

//************************************************************************************************ */
