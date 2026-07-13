// Accordion

const accordionBtn = document.querySelector(".accordion-btn");
const accordionContent = document.querySelector(".accordion-content");
const icon = accordionBtn.querySelector("i");

accordionBtn.addEventListener("click", () => {

    if (accordionContent.style.maxHeight) {
        accordionContent.style.maxHeight = null;
        icon.style.transform = "rotate(0deg)";
    } else {
        accordionContent.style.maxHeight =
            accordionContent.scrollHeight + "px";
        icon.style.transform = "rotate(90deg)";
    }
});

// Open by default
window.addEventListener("load", () => {
    accordionContent.style.maxHeight =
        accordionContent.scrollHeight + "px";

    icon.style.transform = "rotate(90deg)";
});

// Search Filter

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function() {

    let filter = this.value.toLowerCase();

    let rows = document.querySelectorAll("#operatorTable tbody tr");

    rows.forEach(row => {

        let text = row.textContent.toLowerCase();

        row.style.display =
            text.includes(filter) ? "" : "none";
    });
});

// Scroll Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("tr").forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
});