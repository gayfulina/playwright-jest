describe('Post', () => {
    beforeAll(async () => {
        await page.goto('https://react-redux.realworld.io/#/login')
    })

    test.jestPlaywrightSkip( {browsers: ['chromium']}, 'Sign In', async () => {
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
    afterAll(async () => {
        await browser.close()
    })
})