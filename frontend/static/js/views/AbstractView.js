export default class {
    constructor(params) {
        this.params = params;
    }

    setTitle(title) {
        document.title = title;
    }

    async getHtml() {
        return `
            < p > You are viewing post: ${this.postId}.</p >
        `;


    }
}