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
            alert('Fail to add ' + owner)
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
    const email = document.getElementById("email").value;
    const value = document.getElementById("value").value;
    let url = 'http://localhost:3000/api/credits/' + owner;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        },
        body: JSON.stringify({
            email: email,
            value: value
        })
    }).then((response) => {
        if (response.status == 400) {
            alert('Fail to edit ' + owner)
        } else {
            alert(owner + ' Edited.')
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
    let url = 'http://localhost:3000/api/credits/' + owner;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        }
    }).then((response) => {
        if (response.status == 400) {
            alert('Fail to Find ' + owner)
        }
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
        const searchResult = document.getElementById('searchResult')
        searchResult.innerHTML = jsonData.owner + ' : ' + jsonData.value + ' credits.';
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