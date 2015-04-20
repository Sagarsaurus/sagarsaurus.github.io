
function signUp(){
	var verified = true;
	var errorCount = 0;
	var errorString ='';
	var tab = "&nbsp; &nbsp; &nbsp; &nbsp;";

	//Verify First Name
	var firstName = document.forms["signUpForm"]["First"].value;
	if( (firstName.length == 0) || (firstName == 'Please Enter First Name') ){ 
		verified = false;
		errorCount++;
		errorString += tab + "Please Enter a Valid First Name <br>";
		document.getElementById("firstName").style.color = 'red';
		document.getElementById("First").style.backgroundColor = 'yellow';
	} else {
		document.getElementById("firstName").style.color = 'black';
		document.getElementById("First").style.backgroundColor = 'white';		
	}

	//Verify Last Name
	var lastName = document.forms["signUpForm"]["Last"].value;
	if( (lastName.length == 0) || (lastName == 'Please Enter Last Name') ){ 
		verified = false;
		errorCount++;
		errorString += tab + "Please Enter a Valid Last Name <br>";	
		document.getElementById("lastName").style.color = 'red';
		document.getElementById("Last").style.backgroundColor = 'yellow';
	} else {
		document.getElementById("lastName").style.color = 'black';
		document.getElementById("Last").style.backgroundColor = 'white';		
	}

	//Verify User ID
	var userID = document.forms["signUpForm"]["UserID"].value;
	if( (userID.length < 8) || (userID == 'Please Enter a User ID') ){ 
		verified = false;
		errorCount++;
		errorString += tab + "Please enter a Valid User ID. <br>";	
		document.getElementById("userid").style.color = 'red';
		document.getElementById("UserID").style.backgroundColor = 'yellow';
	} else if( /\s/.test(userID) ) {
		verified = false;
		errorCount++;
		errorString += tab + "Please enter a User ID with no spaces. <br>";	
		document.getElementById("userid").style.color = 'red';
		document.getElementById("UserID").style.backgroundColor = 'yellow';		
	} else  {
		document.getElementById("userid").style.color = 'black';
		document.getElementById("UserID").style.backgroundColor = 'white';		
	}

	//Verify Password
	var password1 = document.forms["signUpForm"]["Password1"].value;
	var password2 = document.forms["signUpForm"]["Password2"].value;
	if(password1.length < 8){ 
		verified = false;
		errorCount++;
		errorString += tab + "Your Password must be at least 8 characters long. <br>";	
		document.getElementById("password1").style.color = 'red';
		document.getElementById("Password1").style.backgroundColor = 'yellow';
	} else if(password1!=password2){ 
		verified = false;
		errorCount++;
		errorString += tab + "Passwords must match. <br>";	
		document.getElementById("password1").style.color = 'red';
		document.getElementById("Password1").style.backgroundColor = 'yellow';
		document.getElementById("password2").style.color = 'red';
		document.getElementById("Password2").style.backgroundColor = 'yellow';		
	} else {
		document.getElementById("password1").style.color = 'black';
		document.getElementById("Password1").style.backgroundColor = 'white';
		document.getElementById("password2").style.color = 'black';
		document.getElementById("Password2").style.backgroundColor = 'white';				
	}

	//Verify Email Address
	var email = document.forms["signUpForm"]["Email"].value;
	//var regex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
	var regex = /[A-Za-z0-9][^.]+@[A-z0-9]+\.[A-z]{2,4}/;
	if( !(regex.test(email)) ){ 
		verified = false;
		errorCount++;
		errorString += tab + "Please Enter a Valid Email Address <br>";
		document.getElementById("email").style.color = 'red';
		document.getElementById("Email").style.backgroundColor = 'yellow';
	} else {
		document.getElementById("email").style.color = 'black';
		document.getElementById("Email").style.backgroundColor = 'white';		
	}


	if(errorCount==0){
		//Check Database for duplicate userid
		//Use AJAX to send data to server
		var xmlhttp = new XMLHttpRequest();
		var nameValuePairs = "First="+firstName+"&Last="+lastName+"&UserID="+userID+"&Password1="+password1+"&Email="+email+'"';

		xmlhttp.open("GET", "php/signInUpApp.php?"+nameValuePairs, false); //AJAX Set request
		xmlhttp.send(); //AJAX Send request

	    if(xmlhttp.responseText=="duplicate"){
			verified = false;
			errorCount++;
			errorString += tab + "The User ID you entered is already taken. Please enter another User ID. <br>";
			document.getElementById("userid").style.color = 'red';
			document.getElementById("UserID").style.backgroundColor = 'yellow';	    	
	    } else if(xmlhttp.responseText=="added"){
			document.getElementById("userid").style.color = 'black';
			document.getElementById("UserID").style.backgroundColor = 'white';		    	
	    }
	}

	//Print Message
	var message = document.getElementById("message");
	if( errorCount > 0){
		message.style.color = 'red';		
		message.innerHTML = "Your application has " + errorCount + " error(s). <br> Please correct the following: <br> " + errorString;
	} else {
		message.style.color = 'green';
		message.innerHTML = "Your application is complete. Thank you for signing up for our service.";
		// var form = document.getElementById("signUpForm");
		// form.action = "php/signInUpApp.php";
		// form.submit();
	}


}


		// xmlhttp.onreadystatechange=function(){					//AJAX Callback function
		// 	if (xmlhttp.readyState==4 && xmlhttp.status==200){
		// 		console.log(xmlhttp.responseText);
		// 	    if(xmlhttp.responseText=="duplicate user id"){
		// 			verified = false;
		// 			errorCount++;
		// 			errorString += tab + "The User ID you entered is already taken. Please enter another User ID. <br>";
		// 			document.getElementById("userid").style.color = 'red';
		// 			document.getElementById("UserID").style.backgroundColor = 'yellow';	    	
		// 	    } else if(xmlhttp.responseText=="record added"){
		// 			document.getElementById("userid").style.color = 'black';
		// 			document.getElementById("UserID").style.backgroundColor = 'white';		    	
		// 	    }
		//    	}
		// }


		// xmlhttp.open("POST", "php/signInUpApp.php",true);
		// xmlhttp.send();
		// xmlhttp.setRequestHeader("Content-type", "application/x-ww-form-urlencoded");
		// xmlhttp.send("First=Robert&Last=Jones&UserID=RobJones&Password1=rrrrrrrr&Email=Rob.Jones@gmail.com");
		// xmlhttp.send("First="+firstName+"&Last="+lastName+"&UserID="+userID+"&Password1="+password1+"&Email="+email+'"');

		// console.log(nameValues);

		// xmlhttp.open("GET", "php/signInUpApp.php?"+"First=Robert&Last=Jones&UserID=RobJones&Password1=rrrrrrrr&Email=Rob.Jones@gmail.com",true);
