// Fonction pour afficher l'image sélectionnée
function showImage(imageId) {
    const images = document.querySelectorAll('.image-container');
    images.forEach(image => {
        image.style.display = 'none'; // Masquer toutes les images
    });

    const selectedImage = document.getElementById(imageId);
    selectedImage.style.display = 'flex'; 
}

function toggleLanguage() {
    const headerTitle = document.getElementById('header-title');
    const languageButton = document.getElementById('language-toggle');

    if (headerTitle.innerText === 'Bâtiment Sport') {
        headerTitle.innerText = 'Sports Building'; 
        languageButton.innerText = 'EN / FR'; 
    } else {
        headerTitle.innerText = 'Bâtiment Sport'; 
        languageButton.innerText = 'FR / EN'; 
    }
}


const areas = document.querySelectorAll('.interactive-area');
const zoneName = document.getElementById('zone-name');

areas.forEach(area => {
    area.addEventListener('mouseover', (e) => {
        zoneName.textContent = `Zone: ${e.target.getAttribute('data-name')}`;
    });

    area.addEventListener('mouseout', () => {
        zoneName.textContent = '';  
    });
});
