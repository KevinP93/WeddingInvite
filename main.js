const weddingDate = new Date(2026, 7, 27, 15, 0, 0);
function updateCountdown() {
    const now = new Date();
    const totalMs = weddingDate - now;

    if (totalMs <= 0) {
        document.getElementById('daysCounter').textContent = '0';
        document.getElementById('hoursCounter').textContent = '0';
        document.getElementById('minutesCounter').textContent = '0';
        return;
    }

    const totalMinutes = Math.floor(totalMs / (1000 * 60));
    const days = Math.floor(totalMinutes / (60 * 24));
    const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
    const minutes = totalMinutes % 60;

    document.getElementById('daysCounter').textContent = days;
    document.getElementById('hoursCounter').textContent = hours;
    document.getElementById('minutesCounter').textContent = minutes;
}

// Mets à jour l'affichage toutes les 30 secondes
setInterval(updateCountdown, 30000);
updateCountdown(); 

// Language data
const translations = {
    fr: {
        openInvitation: "Vous avez une invitation",
        clickToOpen: "Cliquez ci-dessous pour ouvrir l'invitation de mariage",
        open: "Ouvrir",
        saveTheDate: "Réservez la date",
        wereGettingMarried: "Nous nous marions!",
        weddingDate: "27 Aout 2026",
        days: "Jours",
        hours: "Heures",
        minutes: "Minutes",
        churchLocation: "Emplacement de l'église",
        receptionLocation: "Emplacement de la réception",
        rsvp: "Confirmation de présence",
        theCouple: "Le Couple",
        theGroom: "Le Marié",
        kevinBio: "Ingénieur logiciel qui aime la randonnée et jouer de la guitare. Impatient de commencer ce nouveau chapitre avec Gabriella.",
        theBride: "La Mariée",
        gabriellaBio: "Graphiste passionnée de photographie et de voyage. Impatiente d'épouser son meilleur ami Kevin.",
        weddingSchedule: "Programme du Mariage",
        ceremony: "Cérémonie",
        ceremonyTime: "11h00 - 12h00",
        churchName: "Escadaria do Santuário do Senhor da Saúde",
        churchAddress: "805 Rua de Santa Maria de Sá, 4990-730 Sà, Portugal",
        cocktailHour: "Cocktail",
        cocktailTime: "14h30 - 16h00",
        restaurantName: "Quinta dos Pinheirais",
        restaurantAddress: " R. dos Pinheirais, 4605-457 Amarante, Portugal",
        reception: "Réception",
        receptionTime: "16h00 - 04h00",
        rsvpForm: "Formulaire RSVP",
        firstName: "Prénom",
        lastName: "Nom de famille",
        phoneNumber: "Numéro de téléphone",
        numberOfAttendees: "Nombre de participants",
        selectNumber: "Sélectionnez un nombre",
        submitRsvp: "Soumettre RSVP",
        thankYou: "Merci!",
        rsvpConfirmed: "Votre RSVP a été confirmé. Nous avons hâte de célébrer avec vous!",
        close: "Fermer",
        thankYouForCelebrating: "Merci de célébrer avec nous!",
        contactInfoPrefix: "Pour toute question, veuillez nous contacter au "
    },
    pt: {
        openInvitation: "Recebeu um convite",
        clickToOpen: "Clique abaixo para abrir o convite de casamento",
        open: "Abrir",
        saveTheDate: "Reserve a Data",
        wereGettingMarried: "Nós vamos nos casar!",
        weddingDate: "27 de agosto de 2026",
        days: "Dias",
        hours: "Horas",
        minutes: "Minutos",
        churchLocation: "Local da Cerimônia",
        receptionLocation: "Local da Recepção",
        rsvp: "Confirmar Presença",
        theCouple: "O Casal",
        theGroom: "O Noivo",
        kevinBio: "Engenheiro de software que adora caminhadas e tocar violão. Mal pode esperar para começar este novo capítulo com Gabriella.",
        theBride: "A Noiva",
        gabriellaBio: "Designer gráfica apaixonada por fotografia e viagens. Ansiosa para se casar com seu melhor amigo Kevin.",
        weddingSchedule: "Programa do Casamento",
        ceremony: "Cerimônia",
        ceremonyTime: "11:00 - 12:00",
        churchName: "Escadaria do Santuário do Senhor da Saúde",
        churchAddress: "805 Rua de Santa Maria de Sá, 4990-730 Sà, Portugal",
        cocktailHour: "Coquetel",
        cocktailTime: "14:30 - 16:00",
        restaurantName: "Quinta dos Pinheirais",
        restaurantAddress: "R. dos Pinheirais, 4605-457 Amarante, Portugal",
        reception: "Recepção",
        receptionTime: "16:00 - 04:00",
        rsvpForm: "Formulário RSVP",
        firstName: "Primeiro Nome",
        lastName: "Sobrenome",
        phoneNumber: "Número de Telefone",
        numberOfAttendees: "Número de Convidados",
        selectNumber: "Selecione um número",
        submitRsvp: "Enviar Confirmação",
        thankYou: "Obrigado!",
        rsvpConfirmed: "Sua confirmação foi recebida. Estamos ansiosos para celebrar com você!",
        close: "Fechar",
        thankYouForCelebrating: "Obrigado por celebrar conosco!",
        contactInfoPrefix: "Para qualquer dúvida, entre em contato conosco"
    }
};

let currentLanguage = 'fr';

// DOM Elements
const languageScreen = document.getElementById('languageScreen');
const envelopeScreen = document.getElementById('envelopeScreen');
const mainContent = document.getElementById('mainContent');
const frenchBtn = document.getElementById('frenchBtn');
const portugueseBtn = document.getElementById('portugueseBtn');
const openEnvelopeBtn = document.getElementById('openEnvelopeBtn');
const changeLanguageBtn = document.getElementById('changeLanguageBtn');
const currentLanguageDisplay = document.getElementById('currentLanguage');
const churchBtn = document.getElementById('churchBtn');
const restaurantBtn = document.getElementById('restaurantBtn');
const rsvpBtn = document.getElementById('rsvpBtn');
const rsvpModal = document.getElementById('rsvpModal');
const closeRsvpModal = document.getElementById('closeRsvpModal');
const rsvpForm = document.getElementById('rsvpForm');
const successModal = document.getElementById('successModal');
const closeSuccessModal = document.getElementById('closeSuccessModal');


document.addEventListener('DOMContentLoaded', () => {

    updateLanguage('fr');

    frenchBtn.addEventListener('click', () => {
        updateLanguage('fr');
        showEnvelopeScreen();
    });

    portugueseBtn.addEventListener('click', () => {
        updateLanguage('pt');
        showEnvelopeScreen();
    });

    openEnvelopeBtn.addEventListener('click', () => {
        const envelope = document.querySelector('.card-envelope');
        envelope.classList.add('open');
        setTimeout(() => {
            envelopeScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('show');
        }, 800); // durée = durée de la transition CSS
    });


    changeLanguageBtn.addEventListener('click', () => {
        currentLanguage = currentLanguage === 'fr' ? 'pt' : 'fr';
        updateLanguage(currentLanguage);
    });

    churchBtn.addEventListener('click', () => {
        window.open('https://www.google.fr/maps/place/Escadaria+do+Santu%C3%A1rio+do+Senhor+da+Sa%C3%BAde/@41.7741242,-8.6238016,17z/data=!3m1!4b1!4m6!3m5!1s0xd25a574ab80eccb:0x8fe747a40b23a3bf!8m2!3d41.7741202!4d-8.6212267!16s%2Fg%2F11f1z6d307?hl=fr&entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D', '_blank');
    });

    restaurantBtn.addEventListener('click', () => {
        window.open('https://www.google.com/maps/dir//R.+dos+Pinheirais,+4605-457+Amarante,+Portugal/@41.2796667,-8.2765287,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd2494f2036b4c59:0x80d4c0e3e7d155d0!2m2!1d-8.1941279!2d41.2796961?entry=ttu&g_ep=EgoyMDI1MDYwOC4wIKXMDSoASAFQAw%3D%3D', '_blank');
    });

    // RSVP modal
    rsvpBtn.addEventListener('click', () => {
        showModal(rsvpModal);
    });

    closeRsvpModal.addEventListener('click', () => {
        hideModal(rsvpModal);
    });

    // RSVP form submission
    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        hideModal(rsvpModal);
        setTimeout(() => {
            showModal(successModal);
            rsvpForm.reset();
        }, 300);
    });

    closeSuccessModal.addEventListener('click', () => {
        hideModal(successModal);
    });

    [rsvpModal, successModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal(modal);
            }
        });
    });
});

function showEnvelopeScreen() {
    languageScreen.classList.add('hidden');
    envelopeScreen.classList.remove('hidden');
}

// Update language across the site
function updateLanguage(lang) {
    currentLanguage = lang;
    currentLanguageDisplay.textContent = lang === 'fr' ? 'FR' : 'PT';

    if (lang === 'fr') {
        frenchBtn.classList.add('active');
        portugueseBtn.classList.remove('active');
    } else {
        frenchBtn.classList.remove('active');
        portugueseBtn.classList.add('active');
    }

    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Show modal with animation
function showModal(modal) {
    modal.classList.remove('hidden');
    setTimeout(() => {
        const modalContent = modal.querySelector('div > div');
        modalContent.style.transform = 'scale(1)';
        modalContent.style.opacity = '1';
    }, 10);
}

// Hide modal with animation
function hideModal(modal) {
    const modalContent = modal.querySelector('div > div');
    modalContent.style.transform = 'scale(0.95)';
    modalContent.style.opacity = '0';
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}
