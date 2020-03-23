import ExamplePage from '../page-objects/examplePage';

fixture`Getting Started`.page`http://devexpress.github.io/testcafe/example`;

const examplePage = new ExamplePage();
let devName = 'Prasad Mudedla';

test('My Page Object Test', async t => {
    await examplePage.enterText(devName);
    await t
        .expect(await examplePage.getMessage())
        .eql(`Thank you, ${devName}!`);
});
