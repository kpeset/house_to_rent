const houseToRent = [
  {
    name: "Modern flat",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037",
    available: true,
  },
  {
    name: "Beautiful design house",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.adsttc.com/media/images/5de3/1ca6/3312/fda8/2a00/00b3/newsletter/001.jpg?1575165037",
    available: true,
  },
  {
    name: "Beautiful House",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    available: false,
  },
  {
    name: "Wonderful house with Garden",
    type: "House",
    desc: "This is the perfect house for you, come to visit it you'll love it ",
    img: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    available: true,
  },
  {
    name: "My super Flat ",
    type: "Flat",
    desc: "This is the perfect flat for you, come to visit it you'll love it ",
    img: "https://images.unsplash.com/photo-1585773690161-7b1cd0accfcf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
    available: true,
  },
];

function createCard(houses) {
  document.querySelector(".cards").innerHTML = "";
  houses.forEach((house) => {
    const cards = document.querySelector(".cards");
    const card = document.createElement("div");
    card.classList.add("card");
    cards.appendChild(card);

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    const cardHeaderImage = document.createElement("div");
    cardHeaderImage.classList.add("card-img");
    cardHeaderImage.style.backgroundImage = `url(${house.img})`;
    cardHeader.appendChild(cardHeaderImage);

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    card.appendChild(cardBody);

    const cardBodyTitle = document.createElement("h2");
    cardBodyTitle.classList.add("card-title");
    cardBody.appendChild(cardBodyTitle);
    cardBodyTitle.textContent = house.name;

    const cardBodyDescription = document.createElement("p");
    cardBodyDescription.classList.add("card-description");
    cardBodyDescription.textContent = house.desc;
    cardBody.appendChild(cardBodyDescription);

    const cardBodyButton = document.createElement("button");
    cardBodyButton.classList.add("card-button");
    cardBodyButton.textContent = "I want it";
    cardBody.appendChild(cardBodyButton);
  });
}

createCard(houseToRent);

// BARRE DE RECHERCHE

const searchInput = document.querySelector(".search-input");

searchInput.addEventListener("input", () => {
  const research = searchInput.value.toLowerCase();

  const result = houseToRent.filter((house) => {
    return house.name.toLowerCase().includes(research);
  });
  createCard(result);
});

// CHECKBOX DISPONIBILITE MAISON

const availableCheckbox = document.querySelector(".available-checkbox");

availableCheckbox.addEventListener("change", () => {
  let filteredHouse = houseToRent;

  if (availableCheckbox.checked) {
    filteredHouse = houseToRent.filter((house) => {
      return house.available === true;
    });
  }

  createCard(filteredHouse);
});

// FILTRER TYPE MAISON

const selectFilter = document.querySelector(".select");

selectFilter.addEventListener("change", () => {
  let filteredHouse = houseToRent;

  if (selectFilter.value !== "All") {
    filteredHouse = houseToRent.filter((house) => {
      return house.type === selectFilter.value;
    });
  }

  createCard(filteredHouse);
});
