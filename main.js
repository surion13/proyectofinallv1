let cards = document.querySelector("#cards");

async function fetchData() {
  try {
    let response = await fetch("/stays.json");
    let data = await response.json();
    return data;
  } catch (error) {
    console.error("ups", error);
  }
}

let dataCards = await fetchData();

function showCards(groupsOfCards) {
  cards.innerHTML = "";

  for (let i = 0; i < groupsOfCards.length; i++) {
    if (groupsOfCards[i].superHost === true) {
      cards.innerHTML += `
        <article">
          <img
            class=" w-full h-60 md:h-64 object-cover rounded-3xl"
            src="${groupsOfCards[i].photo}"
            alt="Apartment"
          />
          <div class="mt-3 mb-6 px-3">
            <div class="flex justify-between items-center">
              <span
                class="border border-gray-700 rounded-full px-2 py-1 text-[10px] font-bold"
                >SUPERHOST</span
              >
              <p class="text-sm text-gray-400">${groupsOfCards[i].type}. ${groupsOfCards[i].beds ?? 0} beds</p>
              <div class="flex items-center gap-1">
                <img class="w-4 h-4" src="/star.svg" alt="star icon" />
                <p class="text-sm text-gray-500">${groupsOfCards[i].rating}</p>
              </div>
            </div>
            <h2 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
              ${groupsOfCards[i].title}
            </h2>
          </div>
        </article>
    `;
    } else {
      cards.innerHTML += `
        <article>
          <img
            class="w-full h-60 md:h-64 object-cover rounded-3xl"
            src="${groupsOfCards[i].photo}"
            alt="Apartment"
          />
          <div class="mt-3 mb-6 px-3">
            <div class="flex justify-between items-center">

              <p class="text-sm text-gray-400">${groupsOfCards[i].type}. ${groupsOfCards[i].beds ?? 0} beds</p>
              <div class="flex items-center gap-1">
                <img class="w-4 h-4" src="/star.svg" alt="star icon" />
                <p class="text-sm text-gray-500">${groupsOfCards[i].rating}</p>
              </div>
            </div>
            <h2 class="mt-2 text-lg font-semibold text-gray-800 dark:text-white">
              ${groupsOfCards[i].title}
            </h2>
          </div>
        </article>
    `;
    }
  }
}

showCards(dataCards);

let menu = document.querySelector("#menu");
let show = document.querySelectorAll(".open-menu");
let hideX = document.querySelector("#hideX");
let overlay = document.querySelector("#overlay");

show.forEach((button) => {
  button.addEventListener("click", () => {
    menu.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

let searchBtnHide = document.querySelector("#searchBtnHide");
let searchDesktop = document.querySelector("#searchDesktopHide");

function closeMenu() {
  menu.classList.add("hidden");
  overlay.classList.add("hidden");
}

hideX.addEventListener("click", closeMenu);

searchBtnHide.addEventListener("click", closeMenu);

searchDesktop.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);

let inputMobile = document.querySelector("#inputMobile");
let substractionBtn1Mobile = document.querySelector("#substractionBtn1Mobile");
let additionBtn1Mobile = document.querySelector("#additionBtn1Mobile");
let substractionBtn2Mobile = document.querySelector("#substractionBtn2Mobile");
let additionBtn2Mobile = document.querySelector("#additionBtn2Mobile");

let inputDesktop = document.querySelector("#inputDesktop");
let substractionBtn1Desktop = document.querySelector(
  "#substractionBtn1Desktop",
);
let additionBtn1Desktop = document.querySelector("#additionBtn1Desktop");
let substractionBtn2Desktop = document.querySelector(
  "#substractionBtn2Desktop",
);
let additionBtn2Desktop = document.querySelector("#additionBtn2Desktop");

let adultsMobile = document.querySelector("#adultsMobile");
let childrenMobile = document.querySelector("#childrenMobile");

let adultsDesktop = document.querySelector("#adultsDesktop");
let childrenDesktop = document.querySelector("#childrenDesktop");

let staysCount = document.querySelector("#staysCount");

let locationInputMobile = document.querySelector("#locationInputMobile");
let locationInputDesktop = document.querySelector("#locationInputDesktop");

let locationListMobile = document.querySelector("#locationListMobile");
let locationListDesktop = document.querySelector("#locationListDesktop");

let adults = 0;
let children = 0;

let selectedLocation = "";

function showLocationSuggestions(searchText) {
  locationListMobile.innerHTML = "";
  locationListDesktop.innerHTML = "";

  if (searchText.trim() === "") {
    return;
  }

  let cities = [...new Set(dataCards.map((card) => card.city))];

  let filteredCities = cities.filter((city) =>
    city.toLowerCase().includes(searchText.toLowerCase()),
  );

  filteredCities.forEach((city) => {
    let mobileItem = document.createElement("li");
    mobileItem.textContent = `${city}, Finland`;
    mobileItem.classList.add("cursor-pointer");

    mobileItem.addEventListener("click", () => {
      selectedLocation = city;

      locationInputMobile.value = city;
      locationInputDesktop.value = city;

      locationListMobile.innerHTML = "";
      locationListDesktop.innerHTML = "";

      filterCards();
    });

    locationListMobile.appendChild(mobileItem);

    let desktopItem = document.createElement("li");
    desktopItem.textContent = `📍 ${city}, Finland`;
    desktopItem.classList.add("cursor-pointer");

    desktopItem.addEventListener("click", () => {
      selectedLocation = city;

      locationInputMobile.value = city;
      locationInputDesktop.value = city;

      locationListMobile.innerHTML = "";
      locationListDesktop.innerHTML = "";

      filterCards();
    });

    locationListDesktop.appendChild(desktopItem);
  });
}

locationInputMobile.addEventListener("input", () => {
  selectedLocation = locationInputMobile.value;

  showLocationSuggestions(selectedLocation);

  filterCards();
});

locationInputDesktop.addEventListener("input", () => {
  selectedLocation = locationInputDesktop.value;

  showLocationSuggestions(selectedLocation);

  filterCards();
});

function updateGuests() {
  let guests = adults + children;

  inputMobile.value = guests;
  inputDesktop.value = guests;

  adultsMobile.textContent = adults;
  adultsDesktop.textContent = adults;

  childrenMobile.textContent = children;
  childrenDesktop.textContent = children;

  filterCards();
}

additionBtn1Mobile.addEventListener("click", () => {
  if (adults + children < 10) {
    adults++;
    updateGuests();
  }
});
additionBtn2Mobile.addEventListener("click", () => {
  if (adults + children < 10) {
    children++;
    updateGuests();
  }
});
substractionBtn1Mobile.addEventListener("click", () => {
  if (adults > 0) {
    adults--;
    updateGuests();
  }
});
substractionBtn2Mobile.addEventListener("click", () => {
  if (children > 0) {
    children--;
    updateGuests();
  }
});

additionBtn1Desktop.addEventListener("click", () => {
  if (adults + children < 10) {
    adults++;
    updateGuests();
  }
});
additionBtn2Desktop.addEventListener("click", () => {
  if (adults + children < 10) {
    children++;
    updateGuests();
  }
});
substractionBtn1Desktop.addEventListener("click", () => {
  if (adults > 0) {
    adults--;
    updateGuests();
  }
});
substractionBtn2Desktop.addEventListener("click", () => {
  if (children > 0) {
    children--;
    updateGuests();
  }
});

updateGuests();

function filterCards() {
  let guests = adults + children;

  let filteredCards = dataCards.filter((card) => {
    let matchGuests = card.maxGuests >= guests;

    let matchLocation =
      selectedLocation === "" ||
      card.city.toLowerCase().includes(selectedLocation.toLowerCase());

    return matchGuests && matchLocation;
  });

  staysCount.textContent = `${filteredCards.length} stays`;

  showCards(filteredCards);
}
