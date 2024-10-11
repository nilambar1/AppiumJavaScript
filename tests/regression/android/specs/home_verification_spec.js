import { error } from "console";
import HomePage from "../pageclasses/homepage"
describe('Home Page Test', ()=>{
    
    it('Verify Home Page links visible', async ()=>{
        try {
            const verifyError = await HomePage.validateHomePageFields();
        if( verifyError.length > 0){
            console.error ("missing or problematic fields" , verifyError);
            throw new error (`field validation failed ${verifyError}`);
        }
        else{
            console.log("all fields are present");
        }
    } catch (error) {
        console.log(`Error occured during execution ${error.message}`)
            
    }
    })
})