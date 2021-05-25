function POST_Item() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    let url = 'http://localhost:3000/api/items';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            price: price
        })
    }).then((response) => {
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function PUT_Item() {
    const name = document.getElementById("name").value;
    const price = document.getElementById("price").value;
    let url = 'http://localhost:3000/api/items/' + name;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            price: price
        })
    }).then((response) => {
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function GET_Item() {
    const name = document.getElementById("email").value;
    let url = 'http://localhost:3000/api/items/' + name;

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

function DELETE_Item() {
    const name = document.getElementById("name").value;
    let url = 'http://localhost:3000/api/items/' + name;

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