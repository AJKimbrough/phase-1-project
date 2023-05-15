const modal = document.querySelector(".modal");

const bootstrapModal = new bootstrap.Modal(modal, {
  keyboard: true,
  backdrop: true,
  focus: true,
});

const renderCards = (cardDataArray) => {
  const cardContainer = document.getElementById("card-container");
  
  cardDataArray.forEach((cardInfo) => {
    const img = document.createElement("img");
    img.src = cardInfo.img;
    img.className = "cardInfo-image";
    img.id = cardInfo.id;
    img.dataset.toggle = "modal";
    img.dataset.target = `cardInfo-${cardInfo.id}`;
    cardContainer.appendChild(img);
    img.addEventListener("dblclick", () => renderModal(cardInfo));
  });
};



const populateModalData = (data, modal) => {
  const name = modal.querySelector(".modal-name");
  const description = modal.querySelector(".modal-description");
  const modalImg = modal.querySelector(".modal-img");
  const modalPrice = modal.querySelector(".modal-price");

  name.textContent = data.name;
  description.textContent = data.description;
  modalImg.src = data.img;
  modalPrice.textContent = data.price
  

  if (data.drops) {
    modalDropsHeading.style.display = "inline-block"
    data.drops.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      modalDrops.appendChild(li);
    });
  }
};


const renderModal = (cardData) => {
  populateModalData(cardData, modal);
  bootstrapModal.show(); 
};


const addEventListenerToNavLinks = () => {
  const links = document.querySelectorAll(".link")
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      fetch(`http://localhost:3000/Best`)
      .then(response => response.json())
      .then(info => {
          renderCards(info)
          return info
      })
      })
    })
}

  const navLinks = document.querySelectorAll(".nav-link")
    navLinks.forEach((link) => link.addEventListener("click", handleNavClick))


const fetchHomeData = () => {
  return fetch('http://localhost:3000/NFTs')
  .then(res => res.json())
  .then(info => renderCards(info))
  .catch(err => console.error(err))
}

/*
document.addEventListener("DOMContentLoaded", () => {
  Object.keys(NFTs).forEach(key => {
    fetchHomeData(key).then(({data}) => saveData(flatten(data), key)).then(data => renderCardsHome(flatten(NFTs)))
  })
})
*/
fetchHomeData()
addEventListenerToNavLinks()
