let btnSubmitMessage = document.getElementById("btnSubmitMessage");

btnSubmitMessage.addEventListener("click", function (event) { // envoie du formulaire au click du bouton
    let formContact = document.getElementById("formContact");
    event.preventDefault();

    if( formContact.reportValidity() == true) {//verification si le formulaire est correctement rempli
        const regexContent = /[^><%#!$/]{15,400}$/;
        if(!regexContent.test(document.getElementById("message").value)){
            alert( "Votre message doit contenir entre 15 et 400 caractères sans caractère speciaux. Merci d'effectuer les modifications nécessaires. Aurore")
            return false
        }
        let contact = { // je cree un objet avec les valeurs que je recupere par les id
            'username': document.getElementById("username").value,
            'email': document.getElementById("email").value,
            'message': document.getElementById("message").value
        }     
        let sendInfo = JSON.stringify( contact );
        //j'envoie des données au serveur    
        fetch('http://localhost:3000' +'/form', {
            method: "post",
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            mode:"cors",
            body: sendInfo            
        })
        .then(function (response) {
            return response.json()
        }) 
        .then(function() { //j enregistre le retour  de l'api dans des variables
            alert( 'Votre message a bien été expédié! Merci')
            document.getElementById("username").value = "";
            document.getElementById("email").value= "";
            document.getElementById("message").value= "";
        })
        //le retour en cas de non connection au serveur 
        .catch(function(err) {
        console.log('Retour info Api problem: ' + err.message);
        })
    }

});