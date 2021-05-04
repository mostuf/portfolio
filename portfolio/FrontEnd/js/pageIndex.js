let btnSubmitMessage = document.getElementById("btnSubmitMessage");

btnSubmitMessage.addEventListener("click", function (event) { // envoie du formulaire au click du bouton
    let formContact = document.getElementById("formContact");
    event.preventDefault();

    if( formContact.reportValidity() == true) {//verification si le formulaire est correctement rempli
        let contact = { // je cree un objet avec les valeurs que je recupere par les id
            'username': document.getElementById("username").value,
            'email': document.getElementById("email").value,
            'message': document.getElementById("message").value
        }     
        let sendInfo = JSON.stringify( contact );
        //j'envoie des données au serveur    
        fetch('#' +'/form', {
            method: "post",
            headers: {"Content-Type": "application/json;charset=UTF-8"},
            mode:"cors",
            body: sendInfo            
        })
        .then(function (response) {
            return response.json()
        }) 
        .then(function() { //j enregistre le retour  de l'api dans des variables
            
//ouverture de la page de confirmation ave les parametres dans l url
               window.location.assign("index.html")
        })
        //le retour en cas de non connection au serveur 
        .catch(function(err) {
        console.log('Retour info Api problem: ' + err.message);
        })
    }

});