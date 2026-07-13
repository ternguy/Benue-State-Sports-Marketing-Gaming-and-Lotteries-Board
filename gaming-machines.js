window.addEventListener('scroll', reveal);

function reveal() {

    const reveals = document.querySelectorAll('.lottery-card');

    for(let i = 0; i < reveals.length; i++) {

        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;

        if(elementTop < windowHeight - elementVisible){
            reveals[i].classList.add('active');
        }
    }
}

document.querySelector('.lottery-card').classList.add('reveal');