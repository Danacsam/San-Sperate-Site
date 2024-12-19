// Array of Image Paths
const imagePaths = [
    'images/18_SanSperateMuralGallery01.png',
    'images/19_SanSperateMuralGallery02.png',
    'images/20_SanSperateMuralGallery03.png',
    'images/21_SanSperateMuralGallery04.png',
    'images/22_SanSperateMuralGallery05.png',
    'images/23_SanSperateMuralGallery06.png',
    'images/24_SanSperateMuralGallery07.png',
    'images/25_SanSperateMuralGallery08.png',
    'images/26_SanSperateMuralGallery09.png',
    'images/27_SanSperateMuralGallery10.png'
];

// Get Popup Elements
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');

// Attach Click Events to Buttons
const buttons = document.querySelectorAll('.image-button');
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Set the correct image for the popup
        popupImage.src = imagePaths[index];
        // Show the popup
        popup.style.display = 'flex';
    });
});

// Close Popup on Outside Click
popup.addEventListener('click', () => {
    popup.style.display = 'none';
});