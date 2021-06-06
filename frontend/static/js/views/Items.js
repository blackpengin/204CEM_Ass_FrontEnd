import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Items");
    }

    async getHtml() {

        return `
        <h1>Items</h1>
            <h2>Add Item</h2>
            <form>
                <label for="add_itemName">Item Name:</label>
                <input type="text" id="add_itemName" name="itemName"><br><br>
                <label for="add_itemPrice">Item Price:</label>
                <input type="text" id="add_itemPrice" name="itemPrice"><br><br>
            </form>
            <button onclick="POST_Item()">Add Item</button><br><br>
            
            <h2>Update Item</h2>
            <form>
                <label for="edit_itemName">Item Name:</label>
                <input type="text" id="edit_itemName" name="itemName"><br><br>
                <label for="edit_itemPrice">Item Price:</label>
                <input type="text" id="edit_itemPrice" name="itemPrice"><br><br>
            </form>
            <button onclick="PUT_Item()">Edit Item</button><br><br>

            <h2>Price List</h2>
            <form>
                <label for="searchItem">Search Item:</label>
                <input type="text" id="searchItem" name="searchItem"><br><br>          
            </form>
            <button onclick="SearchItem()">Search</button><br><br>
            <ul id="itemList"></ul> 
        `;
    }
}