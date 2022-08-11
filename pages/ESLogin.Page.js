// const { default: $ } = require('webdriverio/build/commands/browser/$')
const elementUtil = require('../utility/elementUtil')
const configData = require('../config')
let emailSelector = 'new UiSelector().text("enter your email address").className("android.widget.EditText")'
let passwordSelector = 'new UiSelector().text("enter a password (8+ characters)").className("android.widget.EditText")'
let signUpSelector = 'new UiSelector().text("Sign up").className("android.widget.Button")'

class ESLoginPage {
    get sliderTitle() { return $('id=com.englishscore:id/tv_title') }
    get sliderNext_BTN() { return $('id=com.englishscore:id/btn_next') }
    get getStarted_BTN() { return $('id=com.englishscore:id/btn_sign_up') }
    get contwithEmail_BTN() { return $('id=com.englishscore:id/btn_auth_email') }
    get emailAddressfield() { return $(`android=${emailSelector}`) }
    get passwordField() { return $(`android=${passwordSelector}`) }
    get signUp_BTN() { return $(`android=${signUpSelector}`) }
    get forMyJob_BTN() { return $('id=com.englishscore:id/profiling_motivation_button_job') }
    get noThanks_BTN() { return $('id=com.englishscore:id/lead_gen_upfront_negative_button') }
    get burgerMenu() { return $('id=com.englishscore:id/btn_menu') }
    get accountMenu() { return $('id=com.englishscore:id/tv_popup_menu_account') }
    get deleteYourAccount_BTN() { return $('id=com.englishscore:id/tv_account_delete_btn') }
    get cancel_BTN() { return $('id=com.englishscore:id/image_two_button_positive_button') }
    get deleteAccount_BTN() { return $('id=com.englishscore:id/image_two_button_negative_button') }
    checkSliderTitle() {
        return elementUtil.doGetText(this.sliderTitle)
    }
    clickOnSliderNextBTN() {
        elementUtil.doClick(this.sliderNext_BTN)
    }

    clickOnGetStartedBTN() {
        elementUtil.doClick(this.getStarted_BTN)
    }

    clickOnContWithEmailBTN() {
        elementUtil.doClick(this.contwithEmail_BTN)
    }

    setEmailValue() {
        elementUtil.doClick(this.passwordField)
        // return elementUtil.doSetValue(this.emailAddressfield, configData.username)
        return elementUtil.doSetValue(this.emailAddressfield, elementUtil.generateRandomEmail())
    }

    setPasswordValue() {
        elementUtil.doClick(this.emailAddressfield)
        // return elementUtil.doSetValue(this.passwordField, configData.password)
        return elementUtil.doSetValue(this.passwordField, elementUtil.generateRandomPassword())
    }

    clickOnSignUpBTN() {
        elementUtil.doClick(this.signUp_BTN)
    }

    clickOnforMyJobBTN() {
        elementUtil.doClick(this.forMyJob_BTN)
    }

    clickOnNoThanksBTN() {
        elementUtil.doClick(this.noThanks_BTN)
    }

    clickOnBurgerMenu() {
        elementUtil.doClick(this.burgerMenu)
    }

    clickOnAccountMenu() {
        elementUtil.doClick(this.accountMenu)
    }

    clickOnDeleteYourAccount_BTN() {
        elementUtil.doClick(this.deleteYourAccount_BTN)
    }

    clickOnCancel_BTN() {
        elementUtil.doClick(this.cancel_BTN)
    }

    clickOnDeleteAccount_BTN() {
        elementUtil.doClick(this.deleteAccount_BTN)
    }

}
module.exports = new ESLoginPage()