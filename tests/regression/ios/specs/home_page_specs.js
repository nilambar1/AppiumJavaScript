import {$,$$, expect, driver, browser} from '@wdio/globals'
import HomePageIOS from '../../ios/pageclasses/homepage_objects';

describe('IOS home page', ()=>{
    it('[sanity]Verify home page displayed', async()=>{
        try {
            const isHOmePageDisplayed=await HomePageIOS.elementHomePage.isDisplayed();
            
            if(isHOmePageDisplayed){
                console.log("homepage element displayed")

        }
        } catch (error) {
            console.log(`home page not displayed ${error.message}`)
        }
        

    });
    it('[Regression] this is regression testing', async ()=>{
        console.log("@@@@@@@@@ Regression testing")
    })
})