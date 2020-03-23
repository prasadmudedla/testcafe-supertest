import ExamplePage from './../page-objects/examplePage';

fixture`Getting Started`.page`${process.env.HOST_URL}`;

const examplePage = new ExamplePage();
let devName = 'Prasad Mudedla';

test('Page Object Test', async t => {
    await examplePage.enterText(devName);
    await t
        .expect(await examplePage.getMessage())
        .eql(`Thank you, ${devName}!`);
});
