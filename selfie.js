 function check()
 {
    const name=document.getElementById("name").value,
        mobile=document.getElementById("mobile").value,
        emailid=document.getElementById("emailid").value,
        age=document.getElementById("age").value,
        date=document.getElementById("date").value,
        gender=document.getElementById("gender").value;
        // interest=document.getElementById("interest").value,
        // color=document.getElementById("color").value;

    const nameError=document.getElementById("name-error");
    const mobileError=document.getElementById("mobile-error");
    const emailidError=document.getElementById("emailid-error");
    const ageError=document.getElementById("age-error");
    const dateError=document.getElementById("date-error");
    const genderError=document.getElementById("gender-error");
    // const interestError=document.getElementById("interest-error");
    // const colorError=document.getElementById("color-error");

    nameError.textContent="";
    mobileError.textContent="";
    emailidError.textContent="";
    ageError.textContent="";
    dateError.textContent="";
    genderError.textContent="";
    // interestError.textContent="";
    // colorError.textContent="";

    let isValid=true;
    if(name==""||/\d/.test(name)){
        nameError.textContent="Please provide name";
        isValid=false;
    }
    
    if(mobile==""){
        mobileError.textContent="Please fill the mobile number";
        isValid=false;
    }
    
    if(emailid==""){
        emailidError.textContent="Enter the email-id";
        isValid=false;
    }
    
    if(age==""){
        ageError.textContent="Age is required";
        isValid=false;
    }
    

     if(date==""){
        dateError.textContent="Select  date";
        isValid=false;
    }
    
    if(gender==""){
        genderError.textContent="Select gender";
        isValid=false;
    }
   
    if(isValid){
        document.getElementById('heading').innerHTML=('Your Details!');
        document.getElementById('n1').innerHTML=('Name:  ' +name);
        document.getElementById('mob').innerHTML=('Phone number: '+mobile);
        document.getElementById('mail').innerHTML=('Email-Id: '+emailid);
        document.getElementById('ag').innerHTML=('Age: '+age);
        document.getElementById('dat').innerHTML=('D.O.B: '+date);
        document.getElementById('gend').innerHTML=('Gender: '+gender);

        var dataObject = {
                "Name:": name,
                "Phone number:": mobile,
                "Email-Id:": emailid,
                "Age:": age,
                "D.O.B:": date,
                "Gender:": gender
        };

        // Convert the object to JSON format
        var jsonData = JSON.stringify(dataObject, null, 4); // The `4` is for pretty-printing with 4 spaces

        // Output the JSON string
        console.log(jsonData);

        localStorageSetItem(dataObject, emailid);

        alert("Form submitted successfully!");
    }
    
    return false;
 }
 $(function(){
    $("#includedContent").load("header.html"); 
    console.log("test");
});

function localStorageSetItem(dataObject, emailid) {
    // Initialize or retrieve existing user details from localStorage
    let signUpDetails = localStorage.getItem('signUpDetails');
    if (!signUpDetails) {
        // If signUpDetails does not exist in localStorage, initialize it with an empty object
        signUpDetails = {};
    } else {
        // Parse existing signUpDetails from JSON string
        signUpDetails = JSON.parse(signUpDetails);
    }

    // Add or update users in signUpDetails object
    signUpDetails[emailid] = dataObject;
    //signUpDetails["prasu2@gmail.com"] = user2;

    // Convert object to JSON string
    const signUpDetailsJSON = JSON.stringify(signUpDetails);

    // Store in localStorage
    localStorage.setItem('signUpDetails', signUpDetailsJSON);
}


    //If for interest and color




    // let ele = document.getElementsByName('Interest'),
    //     isInterestSelected = false;
    // for (i = 0; i < ele.length; i++) {
    //     if(ele[i].checked == true) {
    //         console.log("isValid", isValid);
    //         if(isValid) {
    //             document.getElementById("result").innerHTML= "Area of Interest : " + ele[i].value;
    //         }            
    //         isInterestSelected = true;
    //     }
    // }
    // if(!isInterestSelected){
    //     interestError.textContent="Interest is required";
    //     isValid=false;
    // }
    // let checkboxes =document.getElementsByName('laptop');
    // let result = "";
    // for (var i = 0; i < checkboxes.length; i++) {
    //     if (checkboxes[i].checked) {
    //         if (result !== "") {
    //             result += ", ";
    //             }
    //         result += checkboxes[i].value + " Color";
    //     }
    // }
    // if(result!="" && isValid) {
    //     document.getElementById("clr").innerHTML="Selected color: "+ result;
    // } 
    // // else if(isValid){
    // //     document.getElementById("clr").innerHTML="Selected color: "+ result;
    // // }
    // if(result==""){
    //     colorError.textContent="Select  color";
    //     isValid=false;
    // }
    // return false;







