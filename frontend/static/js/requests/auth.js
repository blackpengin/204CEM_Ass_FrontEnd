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
            name: name,
            email: email,
            password: password
        })
    }).then((response) => {
        console.log(response.status);
        if (response.status == 400) {
            alert('Register Fail.');
        } else {
            alert('Register Success!');
        }
        return response;
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        alert('Register Fail. ' + err);
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
        if (response.status == 400) {
            alert('Login Fail.');
        } else {
            alert('Login Success!');
        }

        response.text()
            .then(function (text) {
                console.log(text);
                document.cookie = "auth-token=" + text;
                console.log(document.cookie);
            });
        return response;
    }).then((jsonData) => {
        console.log(jsonData.body);
    }).catch((err) => {
        console.log('Error:', err);
        alert('Login Fail. ' + err);
    })
}

