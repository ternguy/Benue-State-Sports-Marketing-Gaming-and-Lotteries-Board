// SCROLL REVEAL

function revealElements(){

    const reveals =
    document.querySelectorAll(".reveal");

    reveals.forEach(item => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        item.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            item.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealElements
);

revealElements();


// Smooth Button Animation

document.querySelectorAll(
'.btn-primary, .btn-secondary'
).forEach(button=>{

button.addEventListener('mouseenter',()=>{

button.style.transform =
'translateY(-5px)';

});

button.addEventListener('mouseleave',()=>{

button.style.transform =
'translateY(0)';

});

});