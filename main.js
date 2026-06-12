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
  for (let i = 0; i < groupsOfCards.length; i++) {
    if (dataCards[i].superHost === true) {
      cards.innerHTML += `
        <article>
          <img
            class="w-full h-60 md:h-64 object-cover rounded-3xl"
            src="${dataCards[i].photo}"
            alt="Apartment"
          />
          <div class="mt-3 mb-6 px-3">
            <div class="flex justify-between items-center">
              <span
                class="border border-gray-700 rounded-full px-2 py-1 text-[10px] font-bold"
                >SUPERHOST</span
              >
              <p class="text-sm text-gray-400">${dataCards[i].type}. ${dataCards[i].beds} beds</p>
              <div class="flex items-center gap-1">
                <img class="w-4 h-4" src="/star.svg" alt="star icon" />
                <p class="text-sm text-gray-500">${dataCards[i].rating}</p>
              </div>
            </div>
            <h2 class="mt-2 text-lg font-semibold text-gray-800">
              ${dataCards[i].title}
            </h2>
          </div>
        </article>
    `;
    } else {
      cards.innerHTML += `
        <article>
          <img
            class="w-full h-60 md:h-64 object-cover rounded-3xl"
            src="${dataCards[i].photo}"
            alt="Apartment"
          />
          <div class="mt-3 mb-6 px-3">
            <div class="flex justify-between items-center">

              <p class="text-sm text-gray-400">${dataCards[i].type}. ${dataCards[i].beds} beds</p>
              <div class="flex items-center gap-1">
                <img class="w-4 h-4" src="/star.svg" alt="star icon" />
                <p class="text-sm text-gray-500">${dataCards[i].rating}</p>
              </div>
            </div>
            <h2 class="mt-2 text-lg font-semibold text-gray-800">
              ${dataCards[i].title}
            </h2>
          </div>
        </article>
    `;
    }
  }
}

showCards(dataCards);


let menu = document.querySelector("#menu")
let show = document.querySelectorAll(".open-menu")
let hideX = document.querySelector("#hideX")
let overlay = document.querySelector("#overlay")


show.forEach(button => {
  button.addEventListener("click", () => {
    menu.classList.remove("hidden")
    overlay.classList.remove("hidden")
  })
})

let searchBtnHide = document.querySelector("#searchBtnHide")
let searchDesktop = document.querySelector("#searchDesktopHide")

function closeMenu() {
  menu.classList.add("hidden")
  overlay.classList.add("hidden")
}

hideX.addEventListener("click", closeMenu)

searchBtnHide.addEventListener("click", closeMenu)

searchDesktop.addEventListener("click", closeMenu)

overlay.addEventListener("click", closeMenu)

let inputMobile = document.querySelector("#inputMobile")
let substractionBtn1Mobile = document.querySelector("#substractionBtn1Mobile")
let additionBtn1Mobile = document.querySelector("#additionBtn1Mobile")
let substractionBtn2Mobile = document.querySelector("#substractionBtn2Mobile")
let additionBtn2Mobile = document.querySelector("#additionBtn2Mobile")

inputMobile.value = 0

substractionBtn1Mobile.addEventListener("click", () => {
  if (inputMobile.value >= 1) {
    inputMobile.value--
  }
})

additionBtn1Mobile.addEventListener("click", () => {
    inputMobile.value++

})

substractionBtn2Mobile.addEventListener("click", () => {
  if (inputMobile.value >= 1) {
    inputMobile.value--
  }
})

additionBtn2Mobile.addEventListener("click", () => {
    inputMobile.value++

})


let inputDesktop = document.querySelector("#inputDesktop")
let substractionBtn1Desktop = document.querySelector("#substractionBtn1Desktop")
let additionBtn1Desktop = document.querySelector("#additionBtn1Desktop")
let substractionBtn2Desktop = document.querySelector("#substractionBtn2Desktop")
let additionBtn2Desktop = document.querySelector("#additionBtn2Desktop")

inputDesktop.value = 0

substractionBtn1Desktop.addEventListener("click", () => {
  if (inputMobile.value >= 1) {
    inputMobile.value--
  }
})

additionBtn1Desktop.addEventListener("click", () => {
    inputMobile.value++

})

substractionBtn2Desktop.addEventListener("click", () => {
  if (inputMobile.value >= 1) {
    inputMobile.value--
  }
})

additionBtn2Desktop.addEventListener("click", () => {
    inputMobile.value++

})
