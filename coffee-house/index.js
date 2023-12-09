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


// carousel start//

const button_left = document.querySelector(".carousels__left-button");
const button_right = document.querySelector(".carousels__right-button");
const carusel = document.querySelector(".carousels__items");
let offset = 0;



    const move_left = () => {
        document.documentElement.style.setProperty('--my-start-width', `${offset}px`);
        offset = offset + 480;
        if (offset > 0) {
            offset = -960;
        }
        document.documentElement.style.setProperty('--my-end-width', `${offset}px`);
        carusel.classList.add("transition-carusel-left");
        button_left.removeEventListener("click",move_left);
        button_right.removeEventListener("click",move_right);
    }

    const move_right = () => {
        document.documentElement.style.setProperty('--my-start-width', `${offset}px`);
        offset = offset - 480;
        if (offset < -960) {
            offset = 0;
        }
        document.documentElement.style.setProperty('--my-end-width', `${offset}px`);
        carusel.classList.add("transition-carusel-right");
        button_right.removeEventListener("click",move_right);
        button_left.removeEventListener("click",move_left);
    }


    button_right.addEventListener("click",move_right);
    button_left.addEventListener("click",move_left);

    carusel.addEventListener("animationend", (animation) => {

        if (animation.animationName === "carusel-left") {
            carusel.classList.remove("transition-carusel-left");
            carusel.style.left = offset +'px';
        }

        if (animation.animationName === "carusel-right") {
            carusel.classList.remove("transition-carusel-right");
            carusel.style.left = offset +'px';
        }

        button_right.addEventListener("click",move_right);
        button_left.addEventListener("click",move_left);
    });

