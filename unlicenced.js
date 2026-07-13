// SEARCH FUNCTION

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function(){

let filter = this.value.toLowerCase();

let rows =
document.querySelectorAll("#companyTable tbody tr");

rows.forEach(row=>{

let text = row.textContent.toLowerCase();

row.style.display =
text.includes(filter) ? "" : "none";

});

});


// SCROLL ANIMATION

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{threshold:.2});

document.querySelectorAll("tbody tr")
.forEach(row=>{

observer.observe(row);

});


// BACK TO TOP

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

if(window.scrollY > 300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({
top:0,
behavior:"smooth"
});

});