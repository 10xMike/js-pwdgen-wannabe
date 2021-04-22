// Chiedi all’utente il suo nome
    var userName = prompt('Qual è il tuo nome?');
        
// Chiedi il suo cognome
    var userSurname = prompt('Qual è il tuo cognome?');

// Chiedi il suo colore preferito
    var favColor = prompt('Qual è il tuo colore preferito?');

// Scrivi sulla pagina il risultato
    var passwordElement = document.getElementById('password');
    passwordElement.innerHTML = 'La tua password generata è ' + userName + userSurname + favColor + 21;