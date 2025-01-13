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
            "Gymnase": "Le gymnase est équipé pour accueillir divers sports tels que le basketball, le volleyball et le badminton.",
            "Piscine": "La piscine est idéale pour la natation et les sports aquatiques. Elle est équipée de couloirs de nage, de plongeoirs et de vestiaires adjacents.",
            "Vestiaire 1": "Le vestiaire 1 est équipé de casiers, de douches et de bancs pour se changer confortablement avant et après les activités sportives.",
            "Local Technique": "Le local technique abrite les équipements nécessaires au bon fonctionnement du complexe sportif.",
            "Vestiaire 2": "Le vestiaire 2 est similaire au vestiaire 1, offrant des casiers, des douches et des bancs pour les utilisateurs.",
            "Entrée": "Il s'agit de l'entrée principale du bâtiment.",
            "Salle de Spectacle": "La scène, est conçue pour accueillir différents événements. Elle dispose d'une scène, de sièges pour 750 spectateurs et d'un système de sonorisation et de lumière.",
            "Régie": "La régie est la salle de contrôle où les techniciens gèrent l'éclairage, le son et les effets spéciaux pour les événements se déroulant dans la salle de spectacle. Elle est équipée de consoles de mixage, de panneaux de contrôle et de systèmes de communication."
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
            "Gymnase": "The gymnasium is equipped to host various sports such as basketball, volleyball, and badminton.",
            "Piscine": "The swimming pool is ideal for swimming and water sports. It is equipped with swimming lanes, diving boards, and adjacent locker rooms.",
            "Vestiaire 1": "Locker Room 1 is equipped with lockers, showers, and benches for comfortably changing before and after sports activities.",
            "Local Technique": "The technical room houses the equipment necessary for the proper functioning of the sports complex.",
            "Vestiaire 2": "Locker Room 2 is similar to Locker Room 1, offering lockers, showers, and benches for users.",
            "Entrée": "This is the main entrance of the building.",
            "Salle de Spectacle": "The stage room is designed to host various events. It features a stage, seating for 750 spectators, and a sound and lighting system.",
            "Régie": "The control room is where technicians manage lighting, sound, and special effects for events taking place in the auditorium. It is equipped with mixing consoles, control panels, and communication systems."
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
        { image: "IMAGE/Pas_Dispo.svg", description: "Le gymnase est équipé pour accueillir divers sports tels que le basketball, le volleyball et le badminton." },
    ],
    "Piscine": [
        { image: "IMAGE/Pas_Dispo.svg", description: "La piscine est idéale pour la natation et les sports aquatiques. Elle est équipée de couloirs de nage, de plongeoirs et de vestiaires adjacents." },
    ],
    "Vestiaire 1": [
        { image: "IMAGE/Pas_Dispo.svg", description: "Le vestiaire 1 est équipé de casiers, de douches et de bancs pour se changer confortablement avant et après les activités sportives." },
    ],
    "Local Technique": [
        { image: "IMAGE/Pas_Dispo.svg", description: "Le local technique abrite les équipements nécessaires au bon fonctionnement du complexe sportif." },
    ],
    "Vestiaire 2": [
        { image: "IMAGE/Pas_Dispo.svg", description: "Le vestiaire 2 est similaire au vestiaire 1, offrant des casiers, des douches et des bancs pour les utilisateurs." },
    ],
    "Entrée": [
        { image: "IMAGE/Pas_Dispo.svg", description: "Il s'agit de l'entrée principale du bâtiment." },
    ],
    "Salle de Spectacle": [
        { image: "IMAGE/Pas_Dispo.svg", description: "La scène, est conçue pour accueillir différents événements. Elle dispose d'une scène, de sièges pour 750 spectateurs et d'un système de sonorisation et de lumière." },
    ],
    "Régie": [
        { image: "IMAGE/Pas_Dispo.svg", description: "La régie est la salle de contrôle où les techniciens gèrent l'éclairage, le son et les effets spéciaux pour les événements se déroulant dans la salle de spectacle. Elle est équipée de consoles de mixage, de panneaux de contrôle et de systèmes de communication." },
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
