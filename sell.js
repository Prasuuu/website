// Sample data for demonstration
const dogs = [
    { name: 'Max', breed: 'Golden Retriever', age: 1, price: 15000, image: 'golden.jpeg' },
    { name: 'Bella', breed: 'Labrador', age: 1 , price: 1000, image: 'chocky.jpg' },
    { name: 'Charlie', breed: 'Shitzu', age: 1, price: 3000, image: 'shitzu.jpg' }
];

// Function to display dogs on the webpage
function displayDogs() {
    const dogsList = document.getElementById('dogs-list');

    dogs.forEach(dog => {
        // Create a div for each dog listing
        const dogDiv = document.createElement('div');
        dogDiv.classList.add('dog');

        const dogImg = document.createElement('img');
        dogImg.src = dog.image;
        dogImg.alt = dog.name;
        dogImg.style.maxWidth = '100%'; // Ensure image does not exceed container width
        dogImg.style.height = 'auto';
        dogImg.style.width = '500px';
        dogImg.style.height = '500px';

        // Append the image to the dog div
        dogDiv.appendChild(dogImg);

        // Populate the div with dog information
        dogDiv.innerHTML = `
            <img src="${dog.image}" alt="${dog.name}">
            <h2> ${dog.name}</h2>
            <p>Breed: ${dog.breed}</p>
            <p>Age: ${dog.age} years</p>
            <p>Price: ${dog.price}</p>
            <a href="#" class="btn">Buy Now</a>
        `;

        // Append the dog div to the dogsList section
        dogsList.appendChild(dogDiv);
    });
}

// Display dogs when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayDogs();
});
$(function(){
    $("#includedContent").load("header.html"); 
    console.log("sell");
});
