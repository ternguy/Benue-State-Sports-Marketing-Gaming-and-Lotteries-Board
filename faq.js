const faqs=document.querySelectorAll(".faq");

faqs.forEach(faq=>{

faq.querySelector(".question").onclick=()=>{

faq.classList.toggle("active");

}

});

const search=document.getElementById("search");

search.addEventListener("keyup",()=>{

let filter=search.value.toLowerCase();

faqs.forEach(item=>{

let text=item.innerText.toLowerCase();

item.style.display=text.includes(filter)?"block":"none";

});

});