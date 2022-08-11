class ElementUtil{

    doClick(element){
        element.waitForDisplyed()
        element.click()
    }
doSetValue(element, value){
        element.waitForDisplyed()
        element.setValue(value)
    }
doGetText(element){
        element.waitForDisplyed()
        return element.getText()
    }
    generateRandomEmail(){
        var chars1 = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string1 = '';
        for(var i=0; i<5; i++){
            string1 += chars1[Math.floor(Math.random() * chars1.length)];
        }
        const email = 'test.' + string1 + '@gmail.com'
        return email
    }
    generateRandomPassword(){
        var chars2 = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string2= '';
        for(var j=0; j<10; j++){
            string2 += chars2[Math.floor(Math.random() * chars2.length)];
        }
        const pass = string2
        return pass
    }
}
module.exports = new ElementUtil()
