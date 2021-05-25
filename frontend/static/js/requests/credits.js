function POST_Credit() {
    const owner = document.getElementById("owner").value;
    const value = document.getElementById("value").value;
    let url = 'http://localhost:3000/api/credits';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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
            'Content-Type': 'application/json'
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
            'Content-Type': 'application/json'
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
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}