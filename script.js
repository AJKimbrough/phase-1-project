
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

  
  const init = () => {
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


const renderCardsTwo = (dataArray) => {
  const cardContainer = document.getElementById("card-container")
  dataArray.forEach(cardInfo => {
    const img = document.createElement("img")
    img.src = cardInfo.cached_images.small_250_250

    
    cardContainer.appendChild(img)

  })
}

const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'X-API-KEY': 'I7rLhP53t0wjXc4eUizXjC5LYzglaCGm'}
};

fetch('https://api.blockspan.com/v1/nfts/contract/0x41f56b000fffe17943fb4c182c123767af71d005', options)
  
  .then(response => response.json())
  .then(response => renderCardsTwo(response.results))
  .catch(err => console.error(err));
 



   init()
   //initData()
   //renderNFTData()