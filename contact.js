console.log("contactus1");
function validateForm()
{
    console.log("contactus");
   const name=document.getElementById("name").value,
       email=document.getElementById("email").value,
       message=document.getElementById("message").value;

    
   const nameError=document.getElementById("name-error");
   const mailError=document.getElementById("mail-error");
   const messageError=document.getElementById("message-error");
   

    nameError.textContent="";
    mailError.textContent="";
    messageError.textContent="";
  

   let isValid=true;
   if(name==""||/\d/.test(name)){
       nameError.textContent="Please provide name";
       isValid=false;
   }
   
   if(email==""){
       mailError.textContent="Enter  the email-id ";
       isValid=false;
   }
   
   if(message==""){
    messageError.textContent="Type any message in the box";
       isValid=false;
   }
   
 
  
   if(isValid){
       document.getElementById('na1').innerHTML=('Name:  ' +name);
       document.getElementById('mailid').innerHTML=('Email-id: '+email);
       document.getElementById('msg').innerHTML=('Message: '+message);
      
       var dataObject = {
               "Name:": name,
               "Email-id:": email,
               "Message:": message,
              
       };

       // Convert the object to JSON format
       var jsonData = JSON.stringify(dataObject, null, 4); // The `4` is for pretty-printing with 4 spaces

       // Output the JSON string
       console.log(jsonData);

       localStorageSetItem(dataObject, email);

       alert("Thank for contacting us !");
   }
   
   return false;
}

 $(function(){
    $("#includedContent").load("header.html"); 
});



function localStorageSetItem(dataObject, email) {
    // Initialize or retrieve existing user details from localStorage
    let contactDetails = localStorage.getItem('contactDetails');
    if (!contactDetails) {
        // If signUpDetails does not exist in localStorage, initialize it with an empty object
        contactDetails = {};
    } else {
        // Parse existing signUpDetails from JSON string
        contactDetails = JSON.parse(contactDetails);
    }

    // Add or update users in signUpDetails object
    contactDetails[email] = dataObject;
    //signUpDetails["prasu2@gmail.com"] = user2;

    // Convert object to JSON string
    const contactDetailsJSON = JSON.stringify(contactDetails);

    // Store in localStorage
    localStorage.setItem('contactDetails', contactDetailsJSON);
}
