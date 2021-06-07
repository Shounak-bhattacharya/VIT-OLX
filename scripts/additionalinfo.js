document.getElementById('sign-up').onclick = (event) => {
        event.preventDefault();
        const json = {
            full_name: document.getElementById("customerName").value,
            email: document.getElementById("customerEmail").value,
            password: document.getElementById("pwd").value
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(json),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        // send post request
        fetch('http://127.0.0.1:8000/api/v1/user/create/', options)
            .then(res => res.json())
            .then(() => window.location = "http://127.0.0.1:5500/VIT-OLX/login.html")
            .catch(err => console.error(err));
}

