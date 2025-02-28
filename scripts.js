document.addEventListener('DOMContentLoaded', function() {
    // Section Accueil
    const texteAccueil = document.querySelector('#accueil .texte');
    const photoAccueil = document.querySelector('#accueil .photo');
    const boutonAccueil = document.querySelector('#accueil .bouton');

    // Section À propos
    const texteAPropos = document.querySelector('#a-propos .texte');
    const photoAPropos = document.querySelector('#a-propos .photo');
    const boutonAPropos = document.querySelector('#a-propos .bouton');

    // Section Projets
    const titreProjets = document.querySelector('#projets h2');
    const sousTitreProjets = document.querySelector('#projets .sous-titre');
    const projets = document.querySelectorAll('.projet');

    // Section Contact
    const titreContact = document.querySelector('#contact h2');
    const contactGrid = document.querySelector('.contact-grid');
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    const socialLinks = document.querySelector('.social-links');

    // Section Mon Équipe
    const titreEquipe = document.querySelector('#mon-equipe h2');
    const sousTitreEquipe = document.querySelector('#mon-equipe .sous-titre');
    const membresEquipe = document.querySelectorAll('.membre-equipe');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;

        // Animation pour la section Accueil
        if (scrollPosition > 100) {
            texteAccueil.classList.add('visible');
            photoAccueil.classList.add('visible');
            boutonAccueil.classList.add('visible');
        }

        // Animation pour la section À propos
        if (scrollPosition > 800) { // Ajustez cette valeur selon la hauteur de votre section Accueil
            texteAPropos.classList.add('visible');
            photoAPropos.classList.add('visible');
            boutonAPropos.classList.add('visible');
        }

        // Animation pour la section Projets
        if (scrollPosition > 1500) { // Ajustez cette valeur selon la hauteur de votre section À propos
            titreProjets.classList.add('visible');
            sousTitreProjets.classList.add('visible');
            projets.forEach((projet) => {
                projet.classList.add('visible');
            });
        }

        // Animation pour la section Contact
        if (scrollPosition > 2200) { // Ajustez cette valeur selon la hauteur de votre section Projets
            titreContact.classList.add('visible');
            contactGrid.classList.add('visible');
            contactInfo.classList.add('visible');
            contactForm.classList.add('visible');
            socialLinks.classList.add('visible');
        }

        // Animation pour la section Mon Équipe
        if (scrollPosition > 3000) { // Ajustez cette valeur selon la hauteur de votre section Contact
            titreEquipe.classList.add('visible');
            sousTitreEquipe.classList.add('visible');
            membresEquipe.forEach((membre, index) => {
                setTimeout(() => {
                    membre.classList.add('visible');
                }, index * 200); // Délai entre chaque membre
            });
        }
    });
});