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

// cards.innerHTML += `
//     <article>
//       <img
//         class="w-full h-60 md:h-64 object-cover rounded-3xl"
//         src="${dataCards[i].photo}"
//         alt="Apartment"
//       />
//       <div class="mt-3 mb-6 px-3">
//         <div class="flex justify-between items-center">
//           <span
//             class="border border-gray-700 rounded-full px-2 py-1 text-[10px] font-bold"
//             >${dataCards[i].superHost}</span
//           >
//           <p class="text-sm text-gray-400">${dataCards[i].type}. ${dataCards[i].beds} beds</p>
//           <div class="flex items-center gap-1">
//             <img class="w-4 h-4" src="public/star.svg" alt="star icon" />
//             <p class="text-sm text-gray-500">${dataCards[i].rating}</p>
//           </div>
//         </div>
//         <h2 class="mt-2 text-lg font-semibold text-gray-800">
//           ${dataCards[i].title}
//         </h2>
//       </div>
//     </article>
// `

//     cards.innerHTML += `
//     <article>
//       <img
//         class="w-full h-60 md:h-64 object-cover rounded-3xl"
//         src="${dataCards[1].photo}"
//         alt="Apartment"
//       />
//       <div class="mt-3 mb-6 px-3">
//         <div class="flex justify-between items-center">

//           <p class="text-sm text-gray-400">${dataCards[1].type}. ${dataCards[1].beds} beds</p>
//           <div class="flex items-center gap-1">
//             <img class="w-4 h-4" src="public/star.svg" alt="star icon" />
//             <p class="text-sm text-gray-500">${dataCards[1].rating}</p>
//           </div>
//         </div>
//         <h2 class="mt-2 text-lg font-semibold text-gray-800">
//           ${dataCards[1].title}
//         </h2>
//       </div>
//     </article>
// `
showCards(dataCards);
