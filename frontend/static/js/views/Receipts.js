import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
            <h1>Receipts</h1>
            <h2>Add Receipt</h2>
            <ul id="itemList">
            <li>apple : <input type="text" id="searchReceipt" name="searchReceipt"></li>
            
            </ul>
            
            <button onclick="POST_Receipt()">Add Receipt</button>

            <h2>Receipt Record</h2>
            <form>
                <label for="searchReceipt">Search:</label>
                <input type="text" id="searchReceipt" name="searchReceipt">
                <button onclick="GET_Receipt()">Search Receipt</button><br><br>
            </form>

        `;
    }
}