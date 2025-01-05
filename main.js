// Fonction pour initialiser les zones interactives
function initializeAreas() {
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
}

// Fonction pour afficher l'image sélectionnée
function showImage(imageId) {
    const images = document.querySelectorAll('.image-container');
    images.forEach(image => {
        image.style.display = 'none'; // Masquer toutes les images
    });

    const selectedImage = document.getElementById(imageId);
    selectedImage.style.display = 'flex';

    // Initialiser les zones après l'affichage de l'image
    initializeAreas();
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

// Initialiser les zones pour l'image visible au chargement
document.addEventListener('DOMContentLoaded', initializeAreas);
