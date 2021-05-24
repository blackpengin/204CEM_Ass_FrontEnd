

function Test() {
    alert('HI');
}

function Login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    postData('http://localhost:3000/api/user/login', { email: email, password, password })
        .then(data => console.log(data)) // JSON from `response.json()` call
        .catch(error => console.error(error))
}

function postData(url, data) {
    // Default options are marked with *
    return fetch(url, {
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
        body: {
            email: "staff3@758store.com",
            password: "222222"
        }, // must match 'Content-Type' header
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors'
    })
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));
}
