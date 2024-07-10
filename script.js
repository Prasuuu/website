const ACTIVECLASS='active';
const IMAGES=document.querySelectorAll('.slider');
//const CONTENTS = document.querySelectorAll('.content');

console.log("script");
IMAGES[0].classList.add(ACTIVECLASS);

function removeActiveClass(){
    const elm = document.querySelector(`.${ACTIVECLASS}`);
    if(elm){
        elm.classList.remove(ACTIVECLASS);
    }
}

function addClass($event){
    $event.stopPropagation();
    removeActiveClass();
    const target=$event.currentTarget;
    target.classList.add(ACTIVECLASS);
}

IMAGES.forEach(image => {
    image.addEventListener('click' ,addClass);
});

$(function(){
    $("#includedContent").load("header.html"); 
});

const sliders = document.querySelectorAll('.slider');
const contents = document.querySelectorAll('.content');

// Function to hide all content elements
function hideAllContent() {
    contents.forEach(content => {
        content.style.display = 'none';
    });
}

// Function to display content for the clicked image
function displayContent(event) {
    event.stopPropagation();
    
    // Hide all content elements first
    hideAllContent();
    
    // Find the index of the clicked slider
    const sliderIndex = Array.from(sliders).indexOf(event.currentTarget);

    // Display the corresponding content
    contents[sliderIndex].style.display = 'block';
}

// Add click event listeners to each slider
sliders.forEach(slider => {
    slider.addEventListener('click', displayContent);
});

// Optional: Hide all content initially
hideAllContent();   

contents[0].style.display = 'block';


// function localStorageSetItem() {
//     // Initialize or retrieve existing user details from localStorage
//     let userDetails = localStorage.getItem('userDetails');
//     if (!userDetails) {
//         // If userDetails does not exist in localStorage, initialize it with an empty object
//         userDetails = {};
//     } else {
//         // Parse existing userDetails from JSON string
//         userDetails = JSON.parse(userDetails);
//     }

//     // Example user details
//     const user1 = {
//         "Name": "Prasu",
//         "Age": 19,
//         "Mobile": 90000000
//     };

//     const user2 = {
//         "Name": "Prasu",
//         "Age": 20,
//         "Mobile": 90000001
//     };

//     // Add or update users in userDetails object
//     userDetails["prasu1@gmail.com"] = user1;
//     userDetails["prasu2@gmail.com"] = user2;

//     // Convert object to JSON string
//     const userDetailsJSON = JSON.stringify(userDetails);

//     // Store in localStorage
//     localStorage.setItem('userDetails', userDetailsJSON);

// }

function getItem() {
    // Retrieve from localStorage
    const storedUserDetailsJSON = localStorage.getItem('userDetails');

    // Parse JSON string back to object
    const storedUserDetails = JSON.parse(storedUserDetailsJSON);

    // Example: Get details using email as key
    const userEmail = 'prasu1@gmail.com';
    const user = storedUseconsole.log(user); // Output: { "Name": "Prasu", "Age": 19, "Mobile": 90000000 }
    rDetails[userEmail];

}

function updateItem() {
    // Retrieve from localStorage (if not already retrieved)
    const storedUserDetailsJSON = localStorage.getItem('userDetails');
    let storedUserDetails = JSON.parse(storedUserDetailsJSON);

    // Example: Update user details for prasu1@gmail.com
    const userEmailToUpdate = 'prasu1@gmail.com';
    storedUserDetails[userEmailToUpdate] = {
        "Name": "Updated Name",
        "Age": 21, // Updated age
        "Mobile": 99999999 // Updated mobile number
    };

    // Convert updated object to JSON string
    const updatedUserDetailsJSON = JSON.stringify(storedUserDetails);

    // Update localStorage with the updated details
    localStorage.setItem('userDetails', updatedUserDetailsJSON);

}
