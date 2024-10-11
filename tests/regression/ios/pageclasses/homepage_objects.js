import {$,$$, expect, driver, browser} from '@wdio/globals'

class HomePageIOS{
    get elementHomePage(){
        return $('//XCUIElementTypeStaticText[@name="UIKitCatalog"]');
    }


}

export default new HomePageIOS();
