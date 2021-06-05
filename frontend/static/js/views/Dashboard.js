import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("758 Store");
    }

    async getHtml() {
        return `
            <h1>758 Store System</h1>
            <p>
                Please
                <a href="/login" data-link>Login</a>
                /
                <a href="/register" data-link>Register</a>
                 to start.
            </p>

        `;
    }
}