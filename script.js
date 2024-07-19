const navBtns = document.getElementById('nav-btns');
const navCntr = document.getElementById('nave-cntr');
const burgerIcon = document.getElementById('hambuger-icon');
const exIcon = document.getElementById('ex-icon');


function toggleActive() {
    navCntr.classList.toggle('active');
    if(navCntr.classList.contains("active"))  {
        burgerIcon.style.display = "none";
        exIcon.style.display = "initial";
        exIcon.style.background = "#4B5320"
    } else {
        burgerIcon.style.display = "initial";
        burgerIcon.style.background = "white";
        exIcon.style.display = "none";
    }
}

navBtns.addEventListener("click", toggleActive)

const links = document.querySelectorAll('.links-nav');

links.forEach(link => {
    link.addEventListener("click", function() {
            if (navCntr.classList.contains('active')) {
                toggleActive();
        }
    });
});