import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
        <h1>Credits</h1>
        <h2>Add Customer</h2>
        <form>
            <label for="owner">Owner:</label>
            <input type="text" id="owner" name="owner"><br><br>
            <label for="creditValue">Set Credit Value:</label>
            <input type="text" id="creditValue" name="creditValue"><br><br>
        </form>
        <button onclick="POST_Credit()">Add Customer</button>
        
        <h2>Check Owner Credits</h2>
        <form>
            <label for="searchCredit">Search:</label>
            <input type="text" id="searchCredit" name="searchCredit">
            <button onclick="GET_Credit()">Check Owner Credits</button><br><br>
        </form>
        <p>John: 20</p>
        `;
    }
}