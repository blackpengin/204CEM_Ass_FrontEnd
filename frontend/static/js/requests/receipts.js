function POST_Receipt() {
    const buyer = document.getElementById("buyer").value;
    const items = document.getElementById("items").value;
    const total_price = document.getElementById("total_price").value;
    const staff = document.getElementById("staff").value;
    let url = 'http://localhost:3000/api/receipts';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            buyer: buyer,
            items: items,
            total_price: total_price,
            staff: staff
        })
    }).then((response) => {
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function GET_Receipt() {
    const buyer = document.getElementById("buyer").value;
    const date = document.getElementById("date").value;
    let url = 'http://localhost:3000/api/receipts/' + buyer + "/" + date;

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

function DELETE_Receipt() {
    const buyer = document.getElementById("buyer").value;
    const date = document.getElementById("date").value;
    let url = 'http://localhost:3000/api/receipts/' + buyer + "/" + date;

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