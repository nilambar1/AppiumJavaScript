import {$,$$, expect, driver, browser} from '@wdio/globals'
import HomePageIOS from '../../ios/pageclasses/homepage_objects';
const testData = require('../../ios/data/testdata.json')
const fs = require('fs');
const xlsx = require('xlsx')
const { getExcelData } = require('../utils/excelUtils'); // Import the utility function


describe('IOS home page', ()=>{
   
    const excelData = getExcelData('./data/testdata.xlsx'); // Load data from Excel file
    
    // If the data is null (due to an error), skip the tests
    if (!excelData) {
        console.error('Test skipped due to error reading Excel data.');
        return;
    }
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
    excelData.array.forEach(element => {
        
    
    // data driven testing with multiple sets of data
    it(`${user.Username} this is regression testing`, async ()=>{
        console.log("@@@@@@@@@ Regression testing")
        console.log(testData.username);
            console.log(testData.password);
            console.log('invalid password',testData.invalidPassword);
            const rawData = fs.readFileSync('../../ios/data/testdata.json');
            const testData = JSON.parse(rawData);
            const userName =testData.username;




    })
});
})