console.log("Running Scripts")


const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': 'I7rLhP53t0wjXc4eUizXjC5LYzglaCGm'}
  };

  const renderCards = (dataArray) => {
    console.log(dataArray)
    dataArray.forEach(cardInfo => {
        console.log(cardInfo.id)
    })
  }
  
  fetch('https://api.blockspan.com/v1/nfts?chain=eth-main', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => renderCards(err.id));

