console.log("Running Scripts")

var APIKey = "I7rLhP53t0wjXc4eUizXjC5LYzglaCGm"
var NFT

fetch(APIKey)
.then(response => response.json())
.then(data => console.log(data))