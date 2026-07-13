document.querySelectorAll('.dropdown > a').forEach(item => {
    item.addEventListener('click', function(e){
        if(window.innerWidth <= 991){
            e.preventDefault();
            this.parentElement.classList.toggle('open');
        }
    });
});

// Footer Logo Animation
document.addEventListener("DOMContentLoaded", function () {

    const footerLogo = document.getElementById("footerLogo");
    const socialLogo = document.getElementById("socialLogo");

    if (footerLogo) {
        footerLogo.addEventListener("click", function () {
            footerLogo.classList.add("logo-spin");

            setTimeout(() => {
                footerLogo.classList.remove("logo-spin");
            }, 1000);
        });
    }

    if (socialLogo) {
        socialLogo.addEventListener("click", function () {
            socialLogo.classList.toggle("logo-pulse");
        });
    }
});
