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
            location.href = '/login';
        }
        return response;
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
            response.text()
                .then(function (text) {
                    console.log(text);
                    document.cookie = "auth-token=" + text;
                    console.log(document.cookie);
                });
            location.href = '/items';
        }
        return response;
    }).catch((err) => {
        console.log('Error:', err);
        alert('Login Fail. ' + err);
    })
}

function Logout() {
    document.cookie = "auth-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    location.href = '/';
    ReloadPage();
}

function ReloadPage() {
    if (GetCookie('auth-token') == null) {
        document.getElementById("items").style.visibility = "hidden";
        document.getElementById("receipts").style.visibility = "hidden";
        document.getElementById("credits").style.visibility = "hidden";
        document.getElementById("logout").style.visibility = "hidden";
    } else {
        document.getElementById("items").style.visibility = "visible";
        document.getElementById("receipts").style.visibility = "visible";
        document.getElementById("credits").style.visibility = "visible";
        document.getElementById("logout").style.visibility = "visible";
    }
}