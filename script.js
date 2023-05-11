console.log("Running Scripts")

/*
const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': 'I7rLhP53t0wjXc4eUizXjC5LYzglaCGm'}
  };

  /*
  fetch('https://api.blockspan.com/v1/nfts?chain=eth-main', options)
    .then(response => response.json())
    .then(response => console.log(response.results))
    .catch(err => console.log(err));
    */


  const renderCards = (dataArray) => {
    //console.log(dataArray)
    const cardContainer = document.getElementById("card-container")
    dataArray.forEach(cardInfo => {
        //for(let i = 0; i < dataArray.length; i++)
        //console.log(cardInfo.cached_images)
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
        .then(response => renderCards(response.results))
        .catch(err => console.error(err));

/*
const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': 'I7rLhP53t0wjXc4eUizXjC5LYzglaCGm'}
  };
  
  fetch('https://api.blockspan.com/v1/nfts/contract/0xbd1b904e981af7bf7c0bf5cbaea90e1fbccd999c?chain=eth-main', options)
    .then(response => response.json())
    .then(response => renderCards(response.results))
    .catch(err => console.error(err));
    */