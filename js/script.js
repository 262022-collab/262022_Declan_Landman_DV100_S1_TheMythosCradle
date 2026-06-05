let contactForm = document.getElementById("contactForm");

if(contactForm){

    let thankYouPopup = document.getElementById("thankYouPopup");
    let thankYouText = document.getElementById("thankYouText");
    let closePopup = document.getElementById("closePopup");

    contactForm.addEventListener("submit", function(event){

        event.preventDefault();

        let userName = document.getElementById("name").value;

        thankYouText.textContent =
            "Thank you for your message " + userName;

        thankYouPopup.style.display = "block";
    });

    closePopup.addEventListener("click", function(){
        thankYouPopup.style.display = "none";
        contactForm.reset();
    });
}
