console.log("script executed");
document.getElementById("sign-in").addEventListener("click", (event) => {
  event.preventDefault();
console.log(document.getElementById("sign-in"));
  const request = new XMLHttpRequest();
  request.open("POST","http://127.0.0.1:8000/api/v1/user/login/", true);
  request.setRequestHeader("Content-Type", "application/json");

  request.onreadystatechange = function() { // Call a function when the state changes.
    console.log(this.status);
    if (this.readyState === XMLHttpRequest.DONE) {
        // Request finished. Do processing here.
    // console.log(JSON.parse(request.response));
    if(this.status === 200) {
      const obj = JSON.parse(request.response);
    window.localStorage.setItem('Id-token',obj.access);
    
    }
else {
      document.write("ACCESS DENIED");
      console.log("ERROR");
    }
    }
    
}
// console.log(document.getElementById("customerEmail").value);
// console.log(document.getElementById("pwd").value);
body = {
  email: document.getElementById("customerEmail").value,
  password: document.getElementById("pwd").value
};

request.send(JSON.stringify(body));
  
})

