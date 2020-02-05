const template = document.querySelector(".foodTemplate").content;

console.log(template);

let foodCopy = template.cloneNode(true);
console.log(foodCopy);

let foodGrid = document.querySelector(".foodGrid");

addAllItems();

function addAllItems(){
    addStarterItems();
    addMainItems();
    addSideItems();
    addDessertItems();
    addDrinkItems();
}

function addStarterItems() {
    foodGrid = document.getElementById("starters");

    addItem("Russian Ringbread JONAS WAS HERE", "imgs/small/ringbroed-sm.jpg", "Russisk ringbrød af Karapatisk mel", "Russisk ringbrød efter en klassisk opskrift fra Karapatien. Dejen blandes koldhæver 30 dage, inde brødet bages over bål. Meget sprødt, godt med Karapatisk bjerggedsmør.", 29, false, 0, true);
        addItem("Cabanossi with beetrootcreme", "imgs/small/rodbede-cabanossi-sm.jpg", "Cabanossi med rødbedecreme og løg", "Cabanossi med rødbedecreme og creme er egentlig en forret, men kammerat Vladimir elskede denne ret så højt, at han forbød restauranter i Krigien at sælge det som andet end en hovedret. Vi anbefaler det dog som forret, inden en god Bortsjs. Skylles helst ned med vodka.", 50, false, 10, true);
}

function addMainItems() {
    foodGrid = document.getElementById("mains");

        addItem("Zygroffs farmers plate", "imgs/small/rodbede-cabanossi-sm.jpg", "Zygroffs bondeplatte - bøndernes svar på Tapas", "Under de trange vilkår på landet Sibirien, bød husmændene på Zygroffs bondeplatte, når der var fest. Gode, grove grøntsager, tørret bøffelkod og masser af æg. Specielt for bondeplatten blev de dejlige caviar skiftet ud med billige kapers. ", 109, true, 0, false);
}

function addSideItems() {
    foodGrid = document.getElementById("sides");

            addItem("Item", "imgs/small/rodbede-cabanossi-sm.jpg", "Item", "Item Item Item Item Item Item Item Item Item Item Item Item Item Item ", 0, true, 0, true);
            addItem("Item", "imgs/small/rodbede-cabanossi-sm.jpg", "Item", "Item Item Item Item Item Item Item Item Item Item Item Item Item Item ", 0, true, 0, true);
}

function addDessertItems() {
    foodGrid = document.getElementById("desserts");

            addItem("Pancakes with Caviar", "imgs/small/kaviarpandekager-sm.jpg", "Brændte pandekager med Bordyriske ørne-kaviar", "Brændte pandekager med Bordyriske ørne-kaviar. Ørne laver kaviar på størrelse med peberkorn. Og de smager af kaviar. Ikke peber. Lækkert.", 79, false, 0, false);
}

function addDrinkItems() {
    foodGrid = document.getElementById("drinks");

    addItem("Item", "imgs/small/rodbede-cabanossi-sm.jpg", "Item", "Item Item Item Item Item Item Item Item Item Item Item Item Item Item ", 0, true, 0, true);
    addItem("Item", "imgs/small/rodbede-cabanossi-sm.jpg", "Item", "Item Item Item Item Item Item Item Item Item Item Item Item Item Item ", 0, true, 0, true);

}

function addItem(name, imag, desc, longdesc, price, soldout, disc, veg) {
    foodCopy = template.cloneNode(true);
    foodCopy.querySelector("h2").textContent = name;
    foodCopy.querySelector("img").src = imag;
    foodCopy.querySelector(".description>p:nth-child(1)").textContent = desc;
    foodCopy.querySelector(".description>p:nth-child(2)").textContent = "Price: " + price;
    if (soldout) {
        foodCopy.querySelector(".description>button").textContent = "Sold out";
        foodCopy.querySelector(".description>button").style.backgroundColor = "darkred";
    } else {
        foodCopy.querySelector(".description>button").textContent = "Buy now " + eval("price - disc") + "dkk";
    }
    if (disc == 0) {
        foodCopy.querySelector(".description>p:nth-child(3)").style.display = "none";
    } else {
        foodCopy.querySelector(".description>p:nth-child(3)").textContent = "Discount: -" + disc;
    }
    if (veg) {
        foodCopy.querySelector(".description>p:nth-child(4)").textContent = "Vegetarian";
    } else {
        foodCopy.querySelector(".description>p:nth-child(4)").textContent = "";
    }

    foodCopy.querySelector("article").addEventListener("mouseover", function (event) {
        this.querySelector(".description>p:nth-child(1)").textContent = longdesc;
    });
    foodCopy.querySelector("article").addEventListener("mouseout", function (event) {
        this.querySelector(".description>p:nth-child(1)").textContent = desc;
    });
    foodGrid.appendChild(foodCopy);
}
