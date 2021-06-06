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
            <label for="add_owner">Owner:</label>
            <input type="text" id="add_owner" name="owner"><br><br>
            <label for="add_email">Email:</label>
            <input type="text" id="add_email" name="email"><br><br>
        </form>
        <button onclick="POST_Credit()">Add Customer</button><br><br>
        
        <h2>Edit Credits</h2>
        <form>
        <label for="owner">Owner:</label>
            <input type="text" id="owner" name="owner"><br><br>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email"><br><br>
            <label for="creditValue">Set Credit Value:</label>
            <input type="text" id="creditValue" name="creditValue"><br><br>
        </form>
        <button onclick="PUT_Credit()">Edit Credits</button><br><br>

        <h2>Check Credits</h2>
        <form>
            <label for="searchCredit">Search by Email:</label>
            <input type="text" id="searchCredit" name="searchCredit"><br><br> 
        </form>     
        <button onclick="GET_Credit()">Check Owner Credits</button><br><br>
        <p id="searchResult"></p><br><br>
        `;
    }
}