function registration()
	{

		var fName= document.getElementById("fName").value;
		var lName= document.getElementById("lName").value;
        var occupation= document.getElementById("occupation").value;

		if(fName=='')
		{
			alert('Please enter your first name');
		}
   
        else if(lName=='')
		{
			alert('Please enter your Last Name');
		}

        else if(occupation=='')
		{
			alert('Please enter your Occupation');
		}
    
       }

	