console.log("Running Scripts")

/*
const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': 'I7rLhP53t0wjXc4eUizXjC5LYzglaCGm'}
  };
*/

  const renderCards = (dataArray) => {
    //console.log(dataArray)
    dataArray.forEach(cardInfo => {
        //for(let i = 0; i < dataArray.length; i++)
        console.log(cardInfo.cached_images)
    })
  }
  /*
  fetch('https://api.blockspan.com/v1/nfts?chain=eth-main', options)
    .then(response => response.json())
    .then(response => console.log(response.results))
    .catch(err => console.log(err));
    */

    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'X-API-KEY': 'I7rLhP53t0wjXc4eUizXjC5LYzglaCGm'}
      };
      
      fetch('https://api.blockspan.com/v1/nfts/contract/0x41f56b000fffe17943fb4c182c123767af71d005?chain=eth-main', options)
        .then(response => response.json())
        .then(response => renderCards(response.results))
        .catch(err => console.error(err));
