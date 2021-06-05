import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        //this.postId = params.id;
        this.setTitle("Register");
    }

    async getHtml() {
        return `
            <h1>Register</h1>
            <form>
                <label for="name">Name:</label>
                <input type="text" id="name" name="name"><br><br>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password"><br><br>
            </form>
            <button onclick="Register()">Register</button>
        `;
    }
}
