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
                <label for="itemName">Item Name:</label>
                <input type="text" id="itemName" name="itemName"><br><br>
                <label for="itemPrice">Set Item Price:</label>
                <input type="text" id="itemPrice" name="itemPrice"><br><br>
            </form>
            <button onclick="POST_Item()">Add Item</button>
            <h1></h1>
            <ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul> 
        `;
    }
}