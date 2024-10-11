import { $, $$, expect, browser, driver} from '@wdio/globals'
class HomePage{
    get linkApiDemos(){
        return  $('//android.widget.TextView[@text="API Demos1"]');
    }

    get linkApp(){
        return $('~App');

    }
    get linkAnimation(){
        return $('~Animation');

    }
    get linkContent(){
        return $('~Content');

    }
    get linkGraphics(){
        return $('~Graphics');

    }
    get linkMedia(){
        return $('~Media')

    }
    get linkNFC(){
        return $('NFC')

    }
    get linkOS(){
        return $('~OS')

    }
    get linkPreferences(){
        return $('~Preference1')

    }
    get linkText(){
        return $('Text')

    }
    get linkViews(){
        return $('~Views')

    }

  

    async validateHomePageFields(){
        const errorFields = [];
        const allFields = [
            {name1: 'OS', element: this.linkOS},
            {name1: 'Vivew', element:  this.linkViews},
            {name1: 'Prepference', element:  this.linkPreferences}

        ]
        for(let field in allFields){
            console.log(allFields[field].name1)
            try {
                const isDisplayed = await allFields[field].element.isDisplayed();
                if(!isDisplayed){
                    errorFields.push(`${allFields[field].element} is not displayed.`)

                }
            } catch (error) {
                errorFields.push(`${allFields[field].element} is causing an error ${error.message}`)
            }

        }
        return errorFields;
    }
    
}
export default new HomePage();