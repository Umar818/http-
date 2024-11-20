const initialPage = document.getElementById('initialPage');
const reasonsPage = document.getElementById('reasonsPage');
const finalPage = document.getElementById('finalPage');

const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const okayButton = document.getElementById('okayButton');

const initialCatDiv = document.getElementById('initialCat');
const cat2Div = document.getElementById('cat2');
const cat3Div = document.getElementById('cat3');
const thankYouTitle = document.getElementById('thankYou');

// Function to display the initial cat-heart GIF
function displayInitialCat() {
    const initialCatImage = document.createElement('img');
    initialCatImage.src = 'catheart.gif'; // Replace with your actual GIF path
    initialCatDiv.appendChild(initialCatImage);
}

// Function to display the cat2 GIF
function displayCat2() {
    const cat2Image = document.createElement('img');
    cat2Image.src = 'cat2.gif'; // Replace with your actual GIF path
    cat2Div.appendChild(cat2Image);
}

// Function to display the cat3 GIF and the "Thank You" title
function displayCat3AndTitle() {
    const cat3Image = document.createElement('img');
    cat3Image.src = 'cat3.gif'; // Replace with your actual GIF path
    cat3Div.appendChild(cat3Image);

    thankYouTitle.textContent = 'Thank You';
}

// Function to handle button click events
function handleClick(event) {
    const buttonId = event.target.id;

    switch (buttonId) {
        case 'yesButton':
            initialPage.style.display = 'none';
            finalPage.style.display = 'block';
            displayCat3AndTitle();
            break;
        case 'noButton':
            initialPage.style.display = 'none';
            reasonsPage.style.display = 'block';
            displayCat2();
            break;
        case 'okayButton':
            reasonsPage.style.display = 'none';
            finalPage.style.display = 'block';
            displayCat3AndTitle();
            break;
    }
}

// Add event listeners to buttons
yesButton.addEventListener('click', handleClick);
noButton.addEventListener('click', handleClick);
okayButton.addEventListener('click', handleClick);

// Display the initial cat-heart GIF on page load
displayInitialCat();