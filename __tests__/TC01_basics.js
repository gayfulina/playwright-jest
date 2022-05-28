import {addAttach} from "jest-html-reporters/helper";

describe('Post', () => {
    beforeAll(async () => {
        await page.goto('https://react-redux.realworld.io/#/login')
    })

    //test.jestPlaywrightSkip( {browsers: ['chromium']}, 'Sign In', async () => {
    test('Sign In', async () => {
        // await page.goto('https://react-redux.realworld.io/#/login')
        const title = await page.title()
        expect(title).toBe('Conduit')

            await page.fill('input[type = "email"]', 'qacamp.acad@gmail.com')
        await page.press('input[type = "email"]', 'Tab')
        await page.type('input[type = "password"]', 'test12345')

        // await jestPlaywright.debug()

        await Promise.all([
            page.waitForNavigation(),
            await page.click('form >> "Sign in"')
        ]);
    })
    afterEach(async () => {
        const data = await page.screenshot()
        await addAttach(data)
    })
    afterAll(async () => {
        await browser.close()
    })
})