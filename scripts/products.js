// document.getElementById('sign-up').onclick = (event) => {
//     event.preventDefault();
    // const json = {
    //     full_name: document.getElementById("customerName").value,
    //     email: document.getElementById("customerEmail").value,
    //     password: document.getElementById("pwd").value
    // }
    loadItems = () => {
      console.log("script started");
      const myHeaders = new Headers();
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
      
      
      // send post request
      fetch('http://127.0.0.1:8000/api/v1/product/list/', options)
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
                let name = document.createElement('h5');
                productname = document.createTextNode(product.name);
                name.appendChild(productname);
                cardDiv.appendChild(name);
                let productDesc = document.createElement('p');
                productDescText = document.createTextNode(product.description);
                productDesc.appendChild(productDescText);
                cardDiv.appendChild(productDesc);
                let tags = document.createElement('p');
                tagsText = document.createTextNode(product.tags);
                tags.appendChild(tagsText);
                cardDiv.appendChild(tags);
                // let id = document.createElement('p');
                // idText = document.createTextNode(product.id);
                // id.appendChild(idText);
                // cardDiv.appendChild(id);
                let button = document.createElement('button');
                bt = document.createTextNode("Tap to Contact");
                button.appendChild(bt);
                cardDiv.appendChild(button);
                productCards.appendChild(cardDiv);
                console.log(cardDiv);

        }