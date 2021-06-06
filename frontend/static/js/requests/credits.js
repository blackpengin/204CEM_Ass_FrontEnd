function POST_Credit() {
    const owner = document.getElementById("add_owner").value;
    const email = document.getElementById("add_email").value;
    let url = 'http://localhost:3000/api/credits';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        },
        body: JSON.stringify({
            owner: owner,
            email: email,
            value: 0
        })
    }).then((response) => {
        if (response.status == 400) {
            response.text()
                .then(function (text) {
                    console.log(text);
                    alert(text);
                })
        } else {
            alert(owner + ' Added.')
            location.href = '/credits';
        }
        return response.json();
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function PUT_Credit() {
    const owner = document.getElementById("owner").value;
    const email = document.getElementById("email").value;
    const value = document.getElementById("creditValue").value;
    if (email == '') {
        alert('"email" is not allowed to be empty');
        return;
    }
    let url = 'http://localhost:3000/api/credits/' + email;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        },
        body: JSON.stringify({
            owner: owner,
            email: email,
            value: value
        })
    }).then((response) => {
        if (response.status == 400) {
            response.text()
                .then(function (text) {
                    console.log(text);
                    alert(text);
                })
        } else {
            alert(email + ' Edited.')
            location.href = '/credits';
        }
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function GET_Credit() {
    const owner = document.getElementById("searchCredit").value;
    if (owner == '') {
        alert('"email" is not allowed to be empty')
        return;
    }
    let url = 'http://localhost:3000/api/credits/' + owner;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        }
    }).then((response) => {
        if (response.status == 400) {
            response.text()
                .then(function (text) {
                    console.log(text);
                    alert(text);
                })
        }
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
        const searchResult = document.getElementById('searchResult')
        searchResult.innerHTML = jsonData.owner + ' : ' + jsonData.value + ' credits.<br>';

        var btn = 'Delete Customer';
        var node = document.createElement('button');
        node.onclick = function () {
            DELETE_Credit();
        }
        node.appendChild(document.createTextNode(btn));
        searchResult.appendChild(node);
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function DELETE_Credit() {
    const owner = document.getElementById("searchCredit").value;
    let url = 'http://localhost:3000/api/credits/' + owner;

    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        }
    }).then((response) => {
        if (response.status == 400) {
            response.text()
                .then(function (text) {
                    console.log(text);
                    alert(text);
                })
        } else {
            alert(owner + ' Deleted.')
            location.href = '/credits';
        }
        return response;
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}