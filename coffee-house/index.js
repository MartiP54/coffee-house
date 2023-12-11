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
const BUTTON_LEFT = document.querySelector(".carousels__left-button");
const BUTTON_RIGHT = document.querySelector(".carousels__right-button");
const CARUSEL = document.querySelector(".carousels__items");
const CONTROL_ITEMS = document.querySelectorAll(".control-active");
const CARUSEL_WRAPPER = document.querySelector(".favourites-coffee__carousels");
const CARUSEL_ITEM_WRAPPER = document.querySelector(".carousels__wrapper");
let x_start_position;
let x_end_position;
let swipe_carousel ='';
let control_bar_percent = 0;
let valueTime = 0;
let offset = 0;
let timerId;


    const move_left = () => {
        document.documentElement.style.setProperty('--my-start-width', `${offset}px`);
        offset = offset + 480;
        if (offset > 0) {
            offset = -960;
        }
        document.documentElement.style.setProperty('--my-end-width', `${offset}px`);
        CARUSEL.classList.add("transition-carusel-left");
        BUTTON_LEFT.removeEventListener("click",move_left);
        BUTTON_RIGHT.removeEventListener("click",move_right);
        progressBarActiveItem ();
        control_bar_percent = 0;
        document.documentElement.style.setProperty('--control-width', `${control_bar_percent}px`);
    }

    const move_right = () => {
        document.documentElement.style.setProperty('--my-start-width', `${offset}px`);
        offset = offset - 480;
        if (offset < -960) {
            offset = 0;
        }
        document.documentElement.style.setProperty('--my-end-width', `${offset}px`);
        CARUSEL.classList.add("transition-carusel-right");
        BUTTON_RIGHT.removeEventListener("click",move_right);
        BUTTON_LEFT.removeEventListener("click",move_left);
        progressBarActiveItem ();
        control_bar_percent = 0;
        document.documentElement.style.setProperty('--control-width', `${control_bar_percent}px`);
    }

    
    BUTTON_RIGHT.addEventListener("click",move_right);
    BUTTON_LEFT.addEventListener("click",move_left);

  
    // animation start //
    CARUSEL.addEventListener("animationend", (animation) => {

        if (animation.animationName === "carusel-left") {
            CARUSEL.classList.remove("transition-carusel-left");
            CARUSEL.style.left = offset +'px';
        }

        if (animation.animationName === "carusel-right") {
            CARUSEL.classList.remove("transition-carusel-right");
            CARUSEL.style.left = offset +'px';
        }

        BUTTON_RIGHT.addEventListener("click",move_right);
        BUTTON_LEFT.addEventListener("click",move_left);
    });

    // animation end //

// progressBar start//
    function progressBarActiveItem () {
      if (offset == 0) {
        CONTROL_ITEMS.forEach ((e) => {
          if (e.id == 1) {
            e.classList.add('control-active');
          } else {
            e.classList.remove('control-active');
          }
        });
      }
      if (offset == -480) {
        CONTROL_ITEMS.forEach ((e) => {
          if (e.id == 2) {
            e.classList.add('control-active');
          } else {
            e.classList.remove('control-active');
          }
        });
      }
      if (offset == -960) {
        CONTROL_ITEMS.forEach ((e) => {
          if (e.id == 3) {
            e.classList.add('control-active');
          } else {
            e.classList.remove('control-active');
          }
        });
      }
    }
   // progressBar end//

    progressBarActiveItem ();


// swipe start//
    CARUSEL_WRAPPER.addEventListener('touchstart', (touch) => {
    swipe_carousel ='';
     x_start_position = touch.touches[0].clientX;
    } );

    CARUSEL_WRAPPER.addEventListener('touchmove', touchMove);
    function touchMove(touchmove) {
      if (!x_start_position) { 
        return;
      }
      x_end_position = touchmove.touches[0].clientX;
      let x_diff = x_end_position - x_start_position;
      if (x_diff > 0) {
        swipe_carousel = 'left';
      } else {
        swipe_carousel = 'right';
      }
    }
    CARUSEL_WRAPPER.addEventListener('touchend', swipeCarousel);
    function swipeCarousel () {
      if (swipe_carousel =='left') {
        move_left();
      }
      if (swipe_carousel =='right') {
        move_right();
      }
    }
// swipe end//

document.documentElement.style.setProperty('--my-start-width', `${offset}px`);
function progressBarActiveAnimation () {
  if (control_bar_percent < 40) {
    control_bar_percent = control_bar_percent + 8;
    document.documentElement.style.setProperty('--control-width', `${control_bar_percent}px`);
  } else {
    move_right();
    control_bar_percent = 0;
    document.documentElement.style.setProperty('--control-width', `${control_bar_percent}px`);
  }
  
}

function timer () {
  timerId = setTimeout(function tick() {
    progressBarActiveAnimation();
    timerId = setTimeout(tick, 1000);
  }, 1000);
}

timer ();

// stopAutoCarusel start//
CARUSEL_ITEM_WRAPPER.addEventListener('mouseover',stopAutoCarusel);
CARUSEL_ITEM_WRAPPER.addEventListener('mouseout',startAutoCarusel);
CARUSEL_ITEM_WRAPPER.addEventListener('touchstart',stopAutoCarusel);
CARUSEL_ITEM_WRAPPER.addEventListener('touchend',startAutoCarusel);

let control_bar_percent_stop;

function stopAutoCarusel(event) {
  control_bar_percent_stop = control_bar_percent;
  clearTimeout(timerId);
  if (event.type == 'touchstart') {
    event.preventDefault();
  }
}

function startAutoCarusel() {
  control_bar_percent = control_bar_percent_stop;
  clearTimeout(timerId);
  timer ();
}
// stopAutoCarusel end//
