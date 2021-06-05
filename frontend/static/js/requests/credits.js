function POST_Credit() {
    const owner = document.getElementById("owner").value;
    const value = document.getElementById("value").value;
    let url = 'http://localhost:3000/api/credits';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        },
        body: JSON.stringify({
            owner: owner,
            value: value
        })
    }).then((response) => {
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function PUT_Credit() {
    const owner = document.getElementById("owner").value;
    const value = document.getElementById("value").value;
    let url = 'http://localhost:3000/api/credits/' + owner;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        },
        body: JSON.stringify({
            owner: owner,
            value: value
        })
    }).then((response) => {
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function GET_Credit() {
    const owner = document.getElementById("owner").value;
    let url = 'http://localhost:3000/api/credits/' + owner;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        }
    }).then((response) => {
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function DELETE_Credit() {
    const owner = document.getElementById("owner").value;
    let url = 'http://localhost:3000/api/credits/' + owner;

    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        }
    }).then((response) => {
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function GetCookie(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");

    // Loop through the array elements
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if (name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }

    // Return null if not found
    return null;
}