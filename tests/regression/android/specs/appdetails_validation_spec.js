import AppDetailsPage from "../pageclasses/appdetailspage";
import homepage from "../pageclasses/homepage";

describe('App Details Page', ()=>{
    
    it('Verify All links working', async ()=>{
        try {

            await homepage.linkApp.click();
            await AppDetailsPage.verifyAllLinksWorking();
        } catch (error) {
            console.log(`error occured while executing the test ${error.message}`)
        }
       

    })
})