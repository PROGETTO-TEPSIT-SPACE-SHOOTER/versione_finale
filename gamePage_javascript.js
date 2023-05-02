$(document).ready(function(){
    localStorage["TextureSelected"];

    // selezioniamo tutte le immagini con la classe "placeholder"
    const images = document.querySelectorAll('.navs');
    
    // aggiungiamo un gestore di eventi a ciascuna immagine
    images.forEach(image => {
        image.addEventListener('click', function(e) {
            const altValue = this.getAttribute('alt'); // recuperiamo il valore del tag "alt" dell'immagine cliccata
            localStorage["TextureSelected"] = altValue;
            localStorage.setItem("navicella", e.target.alt);
        });
    });

    $(".navs").mouseover(function(event){
        $(event.target).addClass("opaco");
    });

    $(".navs").mouseout(function(event){
        $(event.target).removeClass("opaco");
    });

});