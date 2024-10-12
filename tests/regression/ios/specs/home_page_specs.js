import {$,$$, expect, driver, browser} from '@wdio/globals'
import HomePageIOS from '../../ios/pageclasses/homepage_objects';
const testData = require('../../ios/data/testdata.json')
const fs = require('fs');

describe('IOS home page', ()=>{
    it('[sanity]Verify home page displayed', async()=>{
        try {
            console.log(testData.username);
            console.log(testData.password);
            console.log('invalid password',testData.invalidPassword);
            const rawData = fs.readFileSync('../../ios/data/testdata.json');
            const testData = JSON.parse(rawData);
            const userName =testData.username;

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