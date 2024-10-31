    const userLang = navigator.language || navigator.userLanguage; 
    if (userLang.startsWith('es')) {
        window.location.href = '/es/';
    } else if (userLang.startsWith('ca')) {
        window.location.href = '/ca/';
    } else {
        window.location.href = '/en/'; // Idioma per defecte
    }

    function changeLanguage(lang) {
        // Redirigeix a l'idioma seleccionat
        window.location.href = '/' + lang + '/';
    }

