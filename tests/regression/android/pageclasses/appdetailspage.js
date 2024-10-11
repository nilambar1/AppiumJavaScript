import { $, $$, expect, browser, driver} from '@wdio/globals'
import homepage from './homepage';
class AppDetailsPage{
    // page elements
    get linkActionBar(){
        return $('~Action Bar');

    }
    get linknActivity(){
        return $('~Activity');

    }
    get linkAlarm(){
        

    }
    get linkDeviceAdmin(){
        return $('~Alert Dialogs')

    }

    get allLinkElements() {
        return $$('//*[@resource-id="android:id/text1"]');
    }

    // Method to verify all links
    async verifyAllLinksWorking() {
        try {
            // Retrieve all elements using `await`
            const allLinks = await this.allLinkElements;
            console.log("$$$$$$$$$$$$$$$$$$$$"+allLinks.length)
            // Check if there are any elements
            if (allLinks.length === 0) {
                console.log("No links found on the page.");
                return;
            }

            // Iterate over each link element
            for (let i = 0; i < allLinks.length; i++) {
                // Define `link` inside the loop
                const link = allLinks[i];

                // Use a try-catch inside the loop to handle errors per element
                try {
                    // Check if the link is displayed
                    const isDisplayed = await link.isDisplayed();
                    console.log(`Link ${i} is displayed: ${isDisplayed}`);

                    // Check if the link is clickable
                    const isClickable = await link.isClickable();
                    console.log(`Link ${i} is clickable: ${isClickable}`);

                } catch (elementError) {
                    // Handle errors specific to this element
                    console.log(`Error with link ${i}: ${elementError.message}`);
                }
            }
        } catch (error) {
            // Catch any general errors in the verification process
            console.error(`Error during the link verification process: ${error.message}`);
            throw error;  // Re-throw the error to fail the test if necessary
        }
    }

}
export default new AppDetailsPage();