// hamburger_menu start //
const hamburgerButton = document.querySelector(".hamburger__button");
const nav = document.querySelector(".nav");
const navItem = document.querySelectorAll(".nav__item");
const body = document.querySelector("body");

hamburgerButton.addEventListener("click", () => {
    if (nav.classList.contains("active")) {
        close_hamburger();
    } else {
        open_hamburger();
    }
});


navItem.forEach((i) => {
    i.addEventListener("click", () => {
        if (nav.classList.contains("active")) {
            close_hamburger();
        } else {
            open_hamburger();
        }
    });
});


const open_hamburger = () => {
    nav.classList.add("active");
    body.classList.add("noscroll");
    hamburgerButton.querySelectorAll("span").forEach((line, i) => {
        if (i == 0) {
            line.style.transform = "translateY(4px) rotate(45deg)" ;
        }
        if (i == 1) {
            line.style.transform = "translateY(-2px) rotate(-45deg)" ;
        }
    });
};

const close_hamburger = () => {
    setTimeout(() => {
        nav.classList.remove("active");
        body.classList.remove("noscroll");
    }, );

    hamburgerButton.querySelectorAll("span").forEach((line) => {
        line.style.transform = "";
       
    });
};
// hamburger_menu end //