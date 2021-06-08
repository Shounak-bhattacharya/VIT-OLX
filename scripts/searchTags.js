 document.getElementById('submit').onclick = (event) => {
     event.preventDefault();
     console.log(productCards)
     while (productCards.firstChild) {
        productCards.removeChild(productCards.lastChild);
      }
     
    // const json = {
    //     full_name: document.getElementById("customerName").value,
    //     email: document.getElementById("customerEmail").value,
    //     password: document.getElementById("pwd").value
    // }
    searchtag();
  
        }
    
        searchtag = () => {
            productCards.innerHtml = ""
            console.log("script started");
            const myHeaders = new Headers();
            console.log(productCards.innerHtml)
            const options = {
                method: 'GET',
                // body: JSON.stringify(json),
                // headers: {
                //     'Content-Type': 'application/json'
                // }
                headers: myHeaders,
                mode: 'cors',
                cache: 'default',
              }
            
            tagval = document.getElementById("search-box").value;
            // send post request
            console.log('http://127.0.0.1:8000/api/v1/product/search/?tag='+tagval)
            fetch('http://127.0.0.1:8000/api/v1/product/search/?tag='+tagval, options)
            // .then((event) => {
            //     event.preventDefault();
            // }
            // )
    
                .then(res => res.json())
                .then((res) =>
                {
                   
                  res.forEach((product) => productCard(product));
                }
                )
                .catch(err => console.error(err));
        
         
              }
              let productCards = document.getElementById('about');
              let productCard = (product) => {
               
                let cardDiv = document.createElement('div');
                let productImg = document.createElement('img');
                productImg.setAttribute('src',(product.images[0]?"http://127.0.0.1:8000"+product.images[0].image:"https://www.arraymedical.com/wp-content/uploads/2018/12/product-image-placeholder.jpg"));
                cardDiv.appendChild(productImg);
                let productDesc = document.createElement('p');
                productDescText = document.createTextNode(product.description);
                productDesc.appendChild(productDescText);
                cardDiv.appendChild(productDesc);
                let tags = document.createElement('p');
                tagsText = document.createTextNode(product.tags);
                tags.appendChild(tagsText);
                cardDiv.appendChild(tags);
                productCards.appendChild(cardDiv);
                console.log(cardDiv);
               
              } 