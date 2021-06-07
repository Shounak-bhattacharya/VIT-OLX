document.getElementById('add-in').onclick = (event) => {
    event.preventDefault();
    const json = {
        name: document.getElementById("customerName").value,
        description: document.getElementById("description").value,
        tags: document.getElementById("tags").value,
        long_description: document.getElementById("desc").value,
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
    fetch('http://127.0.0.1:8000/api/v1/product/create/', options)
        .then(res => res.json())
        .then(() =>{
            console.log("DOne")
        }
        )
        .catch(err => console.error(err));
}

