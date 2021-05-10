let btnSubmitMessage = document.getElementById("btnSubmitMessage");

btnSubmitMessage.addEventListener('click', function (event) { // envoie du formulaire au click du bouton
    let formContact = document.getElementById("formContact");
    event.preventDefault();

    if( formContact.reportValidity() == true) {//verification si le formulaire est correctement rempli
        const regexContent = /[^><%#!$/]{15,400}$/;
        if(!regexContent.test(document.getElementById("message").value)){
            alert( "Votre message doit contenir entre 15 et 400 caractères sans caractère spéciaux. Merci d'effectuer les modifications nécessaires. Aurore")
            return false
        }            
        emailjs.sendForm('my_gmail', 'template_aurore',formContact)
        .then(function() {
           alert('Votre message a bien été envoyé à Aurore Création Web! Merci ')
                    document.getElementById("username").value = "";
                    document.getElementById("email").value= "";
                    document.getElementById("message").value= "";
                    document.getElementById("phone").value= "";
        }, function(error) {
            console.log('FAILED...', error);
        });

    }

});