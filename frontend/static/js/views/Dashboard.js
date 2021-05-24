import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>758 Store System</h1>
            <p>
                Please log in to start.
            </p>
            <p>
                <a href="/login" data-link>Login</a>.
            </p>
        `;
    }
}