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


// category drink paganation start//
const MENU_GALLERY = document.querySelector(".menu__gallery");
const TABS_COFFEE = document.querySelector("#tabs_coffee");
const TABS_TEA = document.querySelector("#tabs_tea");
const TABS_DESSERT = document.querySelector("#tabs_dessert");

const COFFEE_ARRAY = [0,1,2,3,4,5,6,7];
const TEA_ARRAY = [8,9,10,11];
const DESSERT_ARRAY = [12,13,14,15,16,17,18,19];

const  createCardTemplate = (id) => {
        
    const card = document.createElement("div");
    card.classList.add("gallery__item");
    card.id = drink_info[id].id;
    MENU_GALLERY.appendChild(card);

    const gallery_Box = document.createElement("div");
    gallery_Box.classList.add("gallery-menu__box");
    card.appendChild(gallery_Box);

    const img = document.createElement('img');
    img.classList.add('gallery-menu__image');
    img.src = `./assets/img/drink-${id}.png`;
    img.alt = `${drink_info[id].name}`;
    gallery_Box.appendChild(img);

    const item_Descriptions = document.createElement("div");
    item_Descriptions.classList.add('item__descriptions');
    card.appendChild(item_Descriptions);

    const item_Title = document.createElement("div");
    item_Title.classList.add('item__title');
    item_Descriptions.appendChild(item_Title);

    const item_Name = document.createElement("h3");
    item_Name.classList.add('item__name');
    item_Name.innerHTML = drink_info[id].name;
    item_Title.appendChild(item_Name);

    const item__Description = document.createElement("p");
    item__Description.classList.add('item__description');
    item__Description.innerHTML = drink_info[id].description;
    item_Title.appendChild(item__Description);
    
    const item_Price = document.createElement("h3");
    item_Price.classList.add('item__price');
    item_Price.innerHTML = `$ ${drink_info[id].price}`;
    item_Title.appendChild(item_Price);

    return card;
  }

  
  for (let i = 0; i < COFFEE_ARRAY.length ; i++) {
    createCardTemplate(i);
  }

  TABS_COFFEE.addEventListener("click", () => {
    MENU_GALLERY.innerHTML='';
    TABS_COFFEE.classList.add('tabs__item-active');
    TABS_TEA.classList.remove('tabs__item-active');
    TABS_DESSERT.classList.remove('tabs__item-active');
    for (let i = 0; i < COFFEE_ARRAY.length ; i++) {
        createCardTemplate(i);
      }
});

TABS_TEA.addEventListener("click", () => {
    MENU_GALLERY.innerHTML='';
    TABS_TEA.classList.add('tabs__item-active');
    TABS_COFFEE.classList.remove('tabs__item-active');
    TABS_DESSERT.classList.remove('tabs__item-active');
    for (let i = 0; i < TEA_ARRAY.length ; i++) {
        createCardTemplate(i+8);
      }
});

TABS_DESSERT.addEventListener("click", () => {
    MENU_GALLERY.innerHTML='';
    TABS_DESSERT.classList.add('tabs__item-active');
    TABS_TEA.classList.remove('tabs__item-active');
    TABS_COFFEE.classList.remove('tabs__item-active');
    for (let i = 0; i < DESSERT_ARRAY.length ; i++) {
        createCardTemplate(i+12);
      }
});


  // category drink paganation end//


 // pop-up start//
 const drink_card = document.getElementById("menu__active");
 const pop_up_image = document.querySelector('.pop_up-image');
 const pop_up_name = document.querySelector('.pop_up-name');
 const pop_up_description = document.querySelector('.pop_up-description');
 const pop_up_price = document.querySelector('.pop_up-price');


 

 const pop_up_wrapper = document.querySelector('.pop_up-wrapper');
 const pop_up_fix = document.querySelector('.pop_up-fix');
 const pop_up  = document.querySelector('.pop_up');
 
 
 
 drink_card.addEventListener('click', drink_id )
 
 
 
 
 function drink_id(e) {
     if (e.target.parentElement.parentElement.parentElement.id == 'menu__active') {
         id = (e.target.parentElement.parentElement.id);
         console.log(id);
     }  if (e.target.parentElement.parentElement.id == 'menu__active') {
        id = (e.target.parentElement.id);
        console.log(id);
     } else {
         id = (e.target.parentElement.parentElement.parentElement.id);
         console.log(id);
     }
     CreateDrinkCardPopup(id);
 }
 
 
 function CreateDrinkCardPopup  (id)  {
 
     
    pop_up_fix.classList.add('pop_up-overlay');
    document.body.classList.add('noscroll');
    pop_up_wrapper.classList.add('pop_up_open');
    pop_up.style.display = 'flex';
    pop_up_image.src = `./assets/img/drink-${id}.png`;
    pop_up_image.alt = `${drink_info[id].name}`; 
    pop_up_name.innerHTML = drink_info[id].name;
    pop_up_description.innerHTML = drink_info[id].description;
    pop_up_price.innerHTML = `${drink_info[id].price}`;
 }
 
 
 pop_up_fix.addEventListener('click', pop_up_close)
 
 function pop_up_close(e) {
   if (e.target.classList.contains('pop_up-overlay') || e.target.classList.contains('pop_up-button')  || e.target.classList.contains('pop_up')) {
     pop_up_fix.classList.remove('pop_up-overlay');
     pop_up_wrapper.classList.remove('pop_up-open')
     pop_up.style.display = 'none';
     document.body.classList.remove('noscroll');
   }    
 }
 
 
   // pop-up end//
