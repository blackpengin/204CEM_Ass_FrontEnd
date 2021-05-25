function Register() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let url = 'http://localhost:3000/api/user/register';


    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Staff 5',
            email: 'staff5@758store.com',
            password: '555555'
        })
    }).then((response) => {
        console.log(response);
        return response;
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function Login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    let url = 'http://localhost:3000/api/user/login';


    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    }).then((response) => {
        console.log(response);
        return response;
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}
