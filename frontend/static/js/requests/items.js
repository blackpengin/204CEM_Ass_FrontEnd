function POST_Item() {
    const name = document.getElementById("itemName").value;
    const price = document.getElementById("itemPrice").value;
    let url = 'http://localhost:3000/api/items';

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        },
        body: JSON.stringify({
            name: name,
            price: price
        })
    }).then((response) => {
        if (response.status == 400) {
            alert('Fail to add ' + name)
        } else {
            alert(name + ' Added.')
        }
        return response;
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function PUT_Item() {
    const name = document.getElementById("itemName").value;
    const price = document.getElementById("itemPrice").value;
    let url = 'http://localhost:3000/api/items/' + name;

    fetch(url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        },
        body: JSON.stringify({
            name: name,
            price: price
        })
    }).then((response) => {
        if (response.status == 400) {
            alert('Fail to edit ' + name)
        } else {
            alert(name + ' edited to $' + price)
        }
        return response.json();
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function SearchItem() {
    const itemList = document.getElementById('itemList')
    itemList.innerHTML = '';
    const name = document.getElementById("searchItem").value;
    if (name == '') {
        GET_AllItem()
    } else {
        GET_Item()
    }
}

function GET_Item() {
    const name = document.getElementById("searchItem").value;
    let url = 'http://localhost:3000/api/items/' + name;

    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        }
    }).then((response) => {
        if (response.status == 400) {
            alert('Fail to search ' + name)
        }
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
        const data = jsonData.name + ' : $' + jsonData.price;
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(data));

        document.querySelector('ul').appendChild(node);


    }).catch((err) => {
        console.log('Error:', err);
    })
}

function DELETE_Item() {
    const name = document.getElementById("itemName").value;
    let url = 'http://localhost:3000/api/items/' + name;

    fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        }
    }).then((response) => {
        if (response.status == 400) {
            alert('Fail to delete ' + name)
        } else {
            alert(name + ' Deleted.')
        }
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
    }).catch((err) => {
        console.log('Error:', err);
    })
}

function GET_AllItem() {
    let url = 'http://localhost:3000/api/items';
    fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'auth-token': GetCookie('auth-token')
        }
    }).then((response) => {
        if (response.status == 400) {
            alert('Fail.')
        }
        return response.json();
    }).then((jsonData) => {
        console.log(jsonData);
        jsonData.forEach(element => {
            const data = element.name + ' : $' + element.price;
            var node = document.createElement('li');
            node.appendChild(document.createTextNode(data));
            document.querySelector('ul').appendChild(node);
        });


    }).catch((err) => {
        console.log('Error:', err);
    })
}

/*function MakeList(listData) {
    // Establish the array which acts as a data source for the list
    let data = listData,
        // Make a container element for the list
        listContainer = document.createElement('div'),
        // Make the list
        listElement = document.createElement('ul'),
        // Set up a loop that goes through the items in listItems one at a time
        numberOfListItems = data.length,
        listItem,
        i;




    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = data[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}*/