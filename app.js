//select HTML elements 
var price = document.querySelector("#price"); 
var btn = document.querySelector("#btn"); 

//listen for clicks
btn.addEventListener("click", function() {
	//make the request 
	var XHR = new XMLHttpRequest(); 

	XHR.onreadystatechange = function() {
		if (XHR.readyState == 4 && XHR.status == 200) {
			var currentPrice = JSON.parse(XHR.responseText).bpi.USD.rate; 
			console.log(currentPrice); 
			price.innerText = currentPrice; 
			  
		}
	}

	//send the request 
	XHR.open("GET", "https://api.coindesk.com/v1/bpi/currentprice.json"); 
	XHR.send(); 
}); 