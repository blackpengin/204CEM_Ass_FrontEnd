import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.postId = params.id;
        this.setTitle("Viewing Post");
    }

    async getHtml() {
        return `
            <h1>Login</h1>
            <form>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email"><br><br>
                <label for="password">Password:</label>
                <input type="text" id="password" name="password"><br><br>
                <button Login</button>
            </form>
            <button onclick="Login()">Login</button>
        `;
    }
}
