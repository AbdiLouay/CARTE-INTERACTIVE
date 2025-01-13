const translations = {
    fr: {
        headerTitle: "Bâtiment Sport",
        languageToggle: "FR / EN",
        button1: "Plan Rez-de-Chaussée",
        button2: "Plan Palier 1",
        zoneNames: {
            "Gymnase": "Gymnase",
            "Piscine": "Piscine",
            "Vestiaire 1": "Vestiaire 1",
            "Local Technique": "Local Technique",
            "Vestiaire 2": "Vestiaire 2",
            "Entrée": "Entrée",
            "Salle de Spectacle": "Salle de Spectacle",
            "Régie": "Régie"
        },
        zoneDescriptions: {
            "Gymnase": "Description du Gymnase",
            "Piscine": "Description de la Piscine",
            "Vestiaire 1": "Description du Vestiaire 1",
            "Local Technique": "Description du Local Technique",
            "Vestiaire 2": "Description du Vestiaire 2",
            "Entrée": "Description de l'Entrée",
            "Salle de Spectacle": "Description de la Salle de Spectacle",
            "Régie": "Description de la Régie"
        }
    },
    en: {
        headerTitle: "Sports Building",
        languageToggle: "EN / FR",
        button1: "Ground Floor Plan",
        button2: "First Floor Plan",
        zoneNames: {
            "Gymnase": "Gymnasium",
            "Piscine": "Swimming Pool",
            "Vestiaire 1": "Locker Room 1",
            "Local Technique": "Technical Room",
            "Vestiaire 2": "Locker Room 2",
            "Entrée": "Entrance",
            "Salle de Spectacle": "Auditorium",
            "Régie": "Control Room"
        },
        zoneDescriptions: {
            "Gymnase": "Gymnasium Description",
            "Piscine": "Swimming Pool Description",
            "Vestiaire 1": "Locker Room 1 Description",
            "Local Technique": "Technical Room Description",
            "Vestiaire 2": "Locker Room 2 Description",
            "Entrée": "Entrance Description",
            "Salle de Spectacle": "Auditorium Description",
            "Régie": "Control Room Description"
        }
    }
};

let currentLanguage = 'fr';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'fr' ? 'en' : 'fr';
    updateContent();
}

function updateContent() {
    const headerTitle = document.getElementById('header-title');
    const languageButton = document.getElementById('language-toggle');
    const buttons = document.querySelectorAll('button');

    headerTitle.innerText = translations[currentLanguage].headerTitle;
    languageButton.innerText = translations[currentLanguage].languageToggle;

    // Mettre à jour les boutons de navigation
    buttons[1].innerText = translations[currentLanguage].button1;
    buttons[2].innerText = translations[currentLanguage].button2;

    // Mettre à jour les descriptions des zones
    const areas = document.querySelectorAll('.interactive-area');
    areas.forEach(area => {
        const zoneName = area.getAttribute('data-name');
        area.setAttribute('data-description', translations[currentLanguage].zoneDescriptions[zoneName]);
    });
}

const zoneData = {
    "Gymnase": [
        { image: "IMAGE/gymnase1.jpg", description: "Description du Gymnase 1" },
    ],
    "Piscine": [
        { image: "IMAGE/piscine1.jpg", description: "Description de la Piscine 1" },
    ],
    "Vestiaire 1": [
        { image: "IMAGE/vestiaire1_1.jpg", description: "Description du Vestiaire 1 - 1" },
    ],
    "Local Technique": [
        { image: "IMAGE/local_technique1.jpg", description: "Description du Local Technique 1" },
    ],
    "Vestiaire 2": [
        { image: "IMAGE/vestiaire2_1.jpg", description: "Description du Vestiaire 2 - 1" },
    ],
    "Entrée": [
        { image: "IMAGE/image P1.png", description: "Description de l'Entrée 1" },
    ],
    "Salle de Spectacle": [
        { image: "IMAGE/salle_spectacle1.jpg", description: "Description de la Salle de Spectacle 1" },
    ],
    "Régie": [
        { image: "IMAGE/regie1.jpg", description: "Description de la Régie 1" },
    ]
};

function initializeAreas(containerId) {
    const container = document.getElementById(containerId);
    const areas = container.querySelectorAll('.interactive-area');
    const zoneName = container.querySelector('.zone-name');

    areas.forEach(area => {
        area.addEventListener('mouseover', (e) => {
            const zoneNameKey = e.target.getAttribute('data-name');
            zoneName.textContent = `Zone: ${translations[currentLanguage].zoneNames[zoneNameKey]}`;
        });

        area.addEventListener('mouseout', () => {
            zoneName.textContent = '';
        });

        area.addEventListener('click', (e) => {
            const zoneName = e.target.getAttribute('data-name');
            const data = zoneData[zoneName];
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomData = data[randomIndex];
            showModal(randomData.image, translations[currentLanguage].zoneDescriptions[zoneName]);
        });
    });
}

function showImage(imageId) {
    const images = document.querySelectorAll('.image-container');
    images.forEach(image => {
        image.style.display = 'none'; // Masquer toutes les images
    });

    const selectedImage = document.getElementById(imageId);
    selectedImage.style.display = 'flex';

    // Initialiser les zones après l'affichage de l'image
    initializeAreas(imageId);
}

function showModal(imageSrc, description) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modal-image');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.querySelector('.close-button');

    modalImage.src = imageSrc;
    modalDescription.textContent = description;
    modal.style.display = 'block';

    closeButton.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    const visibleImage = document.querySelector('.image-container:not([style="display:none;"])');
    if (visibleImage) {
        initializeAreas(visibleImage.id);
    }
});
