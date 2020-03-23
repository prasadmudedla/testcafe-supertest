import { Selector, t } from 'testcafe';

export default class ExamplePage {
    constructor() {
        this.nameBox = Selector('#developer-name');
        this.submitButton = Selector('#submit-button');
    }

    async getMessage() {
        return await Selector('.result-content').find('h1').innerText;
    }

    async enterText(text) {
        await t.typeText(this.nameBox, text).click(this.submitButton);
    }
}
