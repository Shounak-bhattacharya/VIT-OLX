// document.getElementById('sign-up').onclick = (event) => {
//     event.preventDefault();
    // const json = {
    //     full_name: document.getElementById("customerName").value,
    //     email: document.getElementById("customerEmail").value,
    //     password: document.getElementById("pwd").value
    // }
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
        .then((value) =>
        {
console.log(value);
        }
        )
        .catch(err => console.error(err));


