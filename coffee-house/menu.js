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
const REFRESH_ICON = document.querySelector(".menu__refresh-icon");


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
      galleryItemReSize ();
});

TABS_TEA.addEventListener("click", () => {
    MENU_GALLERY.innerHTML='';
    TABS_TEA.classList.add('tabs__item-active');
    TABS_COFFEE.classList.remove('tabs__item-active');
    TABS_DESSERT.classList.remove('tabs__item-active');
    for (let i = 0; i < TEA_ARRAY.length ; i++) {
        createCardTemplate(i+8);
      }
      galleryItemReSize ();
});

TABS_DESSERT.addEventListener("click", () => {
    MENU_GALLERY.innerHTML='';
    TABS_DESSERT.classList.add('tabs__item-active');
    TABS_TEA.classList.remove('tabs__item-active');
    TABS_COFFEE.classList.remove('tabs__item-active');
    for (let i = 0; i < DESSERT_ARRAY.length ; i++) {
        createCardTemplate(i+12);
      }
      galleryItemReSize ();
});



function galleryItemReSize () {
let media1280 = window.matchMedia('(min-width: 769px)');
media1280.addListener(Destop);
Destop(media1280);
function Destop(e) {
    if (e.matches) { 
        const GALLERY_ITEM = document.querySelectorAll(".gallery__item");
        if (GALLERY_ITEM.length > 4) {
            GALLERY_ITEM.forEach ((g) => {
                if ((g.id > 3 && g.id < 8) || (g.id > 15)) {
                    g.classList.remove('display_none')
                }
            })
            REFRESH_ICON.style.display = 'none';
        }
    }
}

const media768 = window.matchMedia('(max-width: 768px)');


media768.addListener(Table);
Table(media768);
function Table(e) {
    if (e.matches) {
        const GALLERY_ITEM = document.querySelectorAll(".gallery__item");
        if (GALLERY_ITEM.length > 4) {
            GALLERY_ITEM.forEach ((g) => {
                if ((g.id > 3 && g.id < 8) || (g.id > 15)) {
                    g.classList.add('display_none')
                }
            }) 
            REFRESH_ICON.style.display = 'flex';
        } else {
            REFRESH_ICON.style.display = 'none';
        }
    }
}
}

galleryItemReSize ();

function refreshDisplay () {
    const GALLERY_ITEM = document.querySelectorAll(".gallery__item");
    if (GALLERY_ITEM.length > 4) {
        GALLERY_ITEM.forEach ((g) => {
            if ((g.id > 3 && g.id < 8) || (g.id > 15)) {
                g.classList.remove('display_none')
            }
        }) 
    } 
        REFRESH_ICON.style.display = 'none';
}

REFRESH_ICON.addEventListener('click', refreshDisplay);


  // category drink paganation end//

 // pop-up start//
 const DRINK_CARD = document.getElementById("menu__active");
 const POP_UP_IMAGE = document.querySelector('.pop_up-image');
 const POP_UP_NAME = document.querySelector('.pop_up-name');
 const POP_UP_DESCRIPTION = document.querySelector('.pop_up-description');
 const POP_UP_PRICE = document.querySelector('.pop_up-price');
 const POP_UP_WRAPPER = document.querySelector('.pop_up-wrapper');
 const POP_UP_FIX = document.querySelector('.pop_up-fix');
 const POP_UP  = document.querySelector('.pop_up');
 const POP_UP_SIZE_S= document.querySelector('.pop_up-tabs-item-s');
 const POP_UP_SIZE_M= document.querySelector('.pop_up-tabs-item-m');
 const POP_UP_SIZE_L= document.querySelector('.pop_up-tabs-item-l');
 const ADDITIVES_ONE = document.querySelector('.additives_one');
 const ADDITIVES_TWO = document.querySelector('.additives_two');
 const ADDITIVES_THREE = document.querySelector('.additives_three');
 const POP_UP_TABS = document.querySelectorAll('.pop_up-tabs-item');
 const POP_UP_ADDITIVES = document.querySelectorAll('.pop_up-additives-items');
 let price;
 let default_price;
 let price_additives = 0;
 let price_size = 0;

 
 DRINK_CARD.addEventListener('click', drink_id );
 
 function drink_id(e) {
    if (e.target.parentElement.parentElement.parentElement.parentElement.id == 'menu__active') {
        id = (e.target.parentElement.parentElement.parentElement.id);
        CreateDrinkCardPopup(id);
     }
     if (e.target.parentElement.parentElement.parentElement.id == 'menu__active') {
         id = (e.target.parentElement.parentElement.id);
         CreateDrinkCardPopup(id);
     }  
     if (e.target.parentElement.parentElement.id == 'menu__active') {
        id = (e.target.parentElement.id);
        CreateDrinkCardPopup(id);
     }
 }
 
 function CreateDrinkCardPopup  (id)  {
    document.body.classList.add('noscroll');
    POP_UP_FIX.classList.add('pop_up-overlay');
    POP_UP_WRAPPER.classList.add('pop_up_open');
    POP_UP_WRAPPER.id = id;
    POP_UP.style.display = 'flex';
    POP_UP_IMAGE.src = `./assets/img/drink-${id}.png`;
    POP_UP_IMAGE.alt = `${drink_info[id].name}`; 
    POP_UP_NAME.innerHTML = drink_info[id].name;
    POP_UP_DESCRIPTION.innerHTML = drink_info[id].description;
    POP_UP_PRICE.innerHTML = `$${drink_info[id].price}`;
    POP_UP_SIZE_S.innerHTML = drink_info[id].sizes.s.size;
    POP_UP_SIZE_M.innerHTML = drink_info[id].sizes.m.size;
    POP_UP_SIZE_L.innerHTML = drink_info[id].sizes.l.size;
    ADDITIVES_ONE.innerHTML = drink_info[id].additives[0].name;
    ADDITIVES_TWO.innerHTML = drink_info[id].additives[1].name;
    ADDITIVES_THREE.innerHTML = drink_info[id].additives[2].name;
    default_price = Number(POP_UP_PRICE.innerHTML.slice(1));
 }
 
 
 POP_UP_FIX.addEventListener('click', pop_up_close);
 
 function pop_up_close(e) {
   if (e.target.classList.contains('pop_up-overlay') || e.target.classList.contains('pop_up-button')  || e.target.classList.contains('pop_up')) {
     POP_UP_FIX.classList.remove('pop_up-overlay');
     POP_UP_WRAPPER.classList.remove('pop_up-open')
     POP_UP.style.display = 'none';
     document.body.classList.remove('noscroll');

     POP_UP_ADDITIVES.forEach((addives) => {
        addives.classList.remove('tabs__item-active');
        addives.classList.remove('addives-active');
    });

    POP_UP_SIZE_S.parentElement.classList.add('tabs__item-active');
    POP_UP_SIZE_M.parentElement.classList.remove('tabs__item-active');
    POP_UP_SIZE_L.parentElement.classList.remove('tabs__item-active');

   }
 }
 


POP_UP_TABS.forEach((tabs) => {
    tabs.addEventListener("click", (e) => {
        POP_UP_TABS.forEach((t) => { 
            t.classList.remove('tabs__item-active');
        });
        e.currentTarget.classList.add('tabs__item-active');
        console.log(e.currentTarget.lastChild);
    });
});



POP_UP_ADDITIVES.forEach((addives) => {
    addives.addEventListener("click", (e) => {
    if (e.currentTarget.classList.contains ('tabs__item-active')) {
        e.currentTarget.classList.remove('tabs__item-active');
        e.currentTarget.classList.remove('addives-active');
    } else {
        e.currentTarget.classList.add('tabs__item-active');
        e.currentTarget.classList.add('addives-active');
    }
    });
});

    POP_UP_TABS.forEach((tabs) => { 
        tabs.addEventListener("click", priceCount);
    });

    POP_UP_ADDITIVES.forEach((addives) => { 
        addives.addEventListener("click", priceCount)
    });

    function priceCount(e) {
        const POP_UP_ADDITIVES_COUNT = document.querySelectorAll('.addives-active');
        price_additives = POP_UP_ADDITIVES_COUNT.length * 0.5;
        if (e.currentTarget.classList.contains('pop_up-tabs-item')) {
            if (e.currentTarget.id == 'm') {
                price_size = 0.5;
                price = default_price + price_size + price_additives;
            }
            if (e.currentTarget.id == 'l') {
                price_size = 1;
                price = default_price + price_size + price_additives;
            }
            if (e.currentTarget.id == 's') {
                price_size = 0;
                price = default_price + price_size + price_additives;
            }
        }

        if (e.currentTarget.classList.contains('pop_up-additives-items')) {
            price = default_price + price_size + price_additives;
        }

        POP_UP_PRICE.innerHTML = `$${price.toFixed(2)}`;
    }

   // pop-up end//
