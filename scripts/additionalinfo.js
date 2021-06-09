document.getElementById('additional').onclick = (event) => {
        event.preventDefault();
        const json = {
            profileimage: document.getElementById("profile_img").value,
            phone: document.getElementById("phone").value,
            bio: document.getElementById("desc").value
        }
        token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI1Njc1MzkzLCJqdGkiOiJkN2NkMGE4YTBiNGY0MjcyYjIzZGQzNjdkNjAxNTg4MCIsInVzZXJfaWQiOjYsImlzcyI6InZpdC1vbHgifQ.lrVYmtYl9pmqdAYKRbzPc0HMAOUIvQJqTQzRBX1D5nY"
    console.log(`Bearer ${token}`)
    console.log(JSON.stringify(json))
    const options = {
        method: 'POST',
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }
    
        // send post request
        fetch('http://127.0.0.1:8000/api/v1/user/profile/create/', options)
            .then(res => res.json())
            .then(() => window.location = "http://127.0.0.1:5500/VIT-OLX/login.html")
            .catch(err => console.error(err));
}

