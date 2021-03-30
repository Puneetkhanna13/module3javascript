let requestURL = "https://Puneetkhanna13.github.io/module3javascript/products.json";

let section=document.getElementsByTagName('section');

let request = new XMLHttpRequest(); 
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  let deals = request.response;
  load(deals);  
}

function load(jsonObj) {
  
  
  for (let i = 0; i < jsonObj.length; i++) {
	  
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    
    img.setAttribute('src', 'https://Puneetkhanna13.github.io/module3javascript/images/' + jsonObj[i].image);
    img.setAttribute('alt', jsonObj[i].image );
    
    h2.textContent = jsonObj[i].name; 
    p1.textContent = 'Price: ' + jsonObj[i].price;
    p2.textContent = 'Description: ' + jsonObj[i].description;
    p2.textContent = 'Features: ' + jsonObj[i].features;
    
        
    article.appendChild(img); 
    article.appendChild(h2);
    article.appendChild(p1); 
    article.appendChild(p2);
    article.appendChild(list);
    section[0].appendChild(article); 
     
  }

}