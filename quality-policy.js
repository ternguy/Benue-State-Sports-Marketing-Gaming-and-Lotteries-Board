// Scroll Animation

function revealElements(){

const reveals =
document.querySelectorAll('.reveal');

reveals.forEach(item=>{

const windowHeight =
window.innerHeight;

const revealTop =
item.getBoundingClientRect().top;

if(revealTop < windowHeight - 100){

item.classList.add('active');

}

});

}

window.addEventListener(
'scroll',
revealElements
);

revealElements();


// Print Button

document.querySelector('.print-btn')
.addEventListener('click', function(e){

e.preventDefault();

window.print();

});


// Download Button Demo

// document.querySelector('.download-btn')
// .addEventListener('click', function(e){

// e.preventDefault();

// alert(
// 'https://drive.google.com/file/d/1HF0VeqzUlcCAihQubxAsNc1edbi86yJA/view?usp=sharing'
// );

// });

document.querySelector('.download-btn').addEventListener('click', function(e) {
    e.preventDefault();

    const link = document.createElement('a');
    link.href = 'files/quality-policy.pdf';
    link.download = 'Quality-Policy.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});