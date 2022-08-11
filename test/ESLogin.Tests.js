const { default: waitForDisplayed } = require('webdriverio/build/commands/element/waitForDisplayed')
const loginPage = require('../pages/ESLogin.Page')

describe('Login page feature test', async () => {

    it('Click on slider next button and login into app by signup', async () => {

        await driver.pause(2000)

        for (let i = 0; i < 4; i++) {
            switch (i) {
                case 0:
                    {
                        // await driver.pause(1000)
                        var title = await loginPage.checkSliderTitle()
                        console.log(title)
                        // await expect(loginPage.checkSliderTitle()).toHaveTextContaining('Test your English in 30 mins')
                        // await assert.equals('Test your English in 30 mins', title, 'Title not found')
                        // await expect(loginPage.checkSliderTitle()).to.equal(title)
                        break;
                    }

                case 1:
                    {
                        // await driver.pause(1000)
                        var title = await loginPage.checkSliderTitle()
                        console.log(title)
                        // await expect(loginPage.checkSliderTitle()).toHaveTextContaining('Test your English in 30 mins')
                        // await assert.equals('Test your English in 30 mins', title, 'Title not found')
                        // await expect(loginPage.checkSliderTitle()).to.equal(title)
                        break;
                    }
                case 2:
                    {
                        // await driver.pause(1000)
                        var title = await loginPage.checkSliderTitle()
                        console.log(title)
                        // await expect(loginPage.checkSliderTitle()).toHaveTextContaining('Score over 200 to unlock a British Council certificate')
                        // await assert.equal('Score over 200 to unlock a British Council certificate', title, 'Title not found')
                        break;
                    }
                case 3:
                    {
                        // await driver.pause(1000)
                        var title = await loginPage.checkSliderTitle()
                        console.log(title)
                        break;
                    }
                }
                    loginPage.clickOnSliderNextBTN()
                    console.log(i, " clicked on sliderNext_BTN")
                    await driver.pause(2000)
            }

            await driver.pause(2000)
        loginPage.clickOnGetStartedBTN()
        
        await driver.pause(2000)
        loginPage.clickOnContWithEmailBTN()

        await driver.pause(2000)
        var email = loginPage.setEmailValue()
        console.log("Email is: ", email)

        await driver.pause(2000)
        var pwd = loginPage.setPasswordValue()
        console.log("Password is: ", pwd)

        await driver.pause(5000)
        loginPage.clickOnSignUpBTN()

        await driver.pause(7000)
        loginPage.clickOnforMyJobBTN()

        await driver.pause(3000)
        loginPage.clickOnNoThanksBTN()

        await driver.pause(10000)
        loginPage.clickOnBurgerMenu()

        await driver.pause(5000)
        loginPage.clickOnAccountMenu()

        await driver.pause(5000)
        loginPage.clickOnDeleteYourAccount_BTN()
        await driver.pause(5000)
        loginPage.clickOnCancel_BTN()

        await driver.pause(5000)
        loginPage.clickOnDeleteYourAccount_BTN()

        await driver.pause(5000)
        loginPage.clickOnDeleteAccount_BTN()
        
              await driver.pause(5000)
        
        
})
})