

const renderCardsHome = (dataArray) => {
  const cardContainer = document.getElementById("card-container")
  dataArray.forEach(cardInfo => {
    const img = document.createElement("img")
    const imgContainer = document.createElement("div")
    //img.src = cardInfo.cached_images.small_250_250
    img.src = cardInfo.img
    //console.log(cardInfo)

    img.addEventListener("click", (event) => {
      //console.log(event.target)
      const pName = document.createElement("p")
      pName.textContent = cardInfo.name
      cardContainer.append(pName)
      console.log(pName)

    })

    
    cardContainer.appendChild(img)

  })
}

const addEventListenerToNavLinks = () => {
  const links = document.querySelectorAll(".link")
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      console.log(e.target)
      fetch('http://localhost:3000/NFTs')
      .then(res => res.json())
      .then(info => renderCardsHome(info))
      })
    })
  
}

  const renderCards = (dataArray) => {
   
    const cardContainer = document.getElementById("card-container")
    dataArray.forEach(cardInfo => {

        const img = document.createElement("img")
      
        img.src = cardInfo.cached_images.small_250_250
        img.addEventListener("dblclick", (event) => {
            console.log(cardInfo.recent_price.price)
            const pName = document.createElement("p")
            pName.textContent = cardInfo.token_name
            console.log(pName)
        })

        cardContainer.appendChild(img)

    })
  }

  
  const fetchData = () => {
    const inputForm = document.querySelector("form")

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault()
        const input = document.querySelector("input#searchByAddress")
        

      const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': 'I7rLhP53t0wjXc4eUizXjC5LYzglaCGm'}
      };
      
      fetch(`https://api.blockspan.com/v1/nfts/contract/${input.value}`, options)
        
        .then(response => response.json())
        .then(response => renderCards(response.results))
        .catch(err => console.error(err));
       
    })
}


/*
   fetchData()
   //initData()
   //renderNFTData()
*/
const fetchHomeData = () => {
  return fetch('http://localhost:3000/NFTs')
  .then(res => res.json())
  .then(info => renderCardsHome(info))
  .catch(err => console.error(err))
}

fetchHomeData()
addEventListenerToNavLinks()