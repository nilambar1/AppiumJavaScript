import {$, $$, except, browser, driver, expect} from '@wdio/globals'
import HomePage from '/Users/nilambar/UKBIAPPIUM/tests/regression/android/pageclasses/homepage';
describe('Alert Tests',()=>{
    it("Verify the pop up exists", async ()=>{
        const isDisplayedLink =await HomePage.linkApiDemos.isDisplayed();
        expect(assert(isDisplayedLink,'elemenet not displayed'));
        
    })
})