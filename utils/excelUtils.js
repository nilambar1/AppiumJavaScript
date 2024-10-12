import { readFile, utils } from 'xlsx';

/**
 * Reads data from an Excel file and converts it to JSON.
 * Handles errors gracefully using try...catch.
 * @param {string} filePath - Path to the Excel file.
 * @return {Array|Error} - JSON data from the Excel file or an error if it occurs.
 */
function getExcelData(filePath) {
    try {
        // Attempt to read the Excel file
        const workbook = readFile(filePath); // Read the file
        const sheetName = workbook.SheetNames[0]; // Get the first sheet
        const worksheet = workbook.Sheets[sheetName];
        
        // Convert the sheet data to JSON format
        const jsonData = utils.sheet_to_json(worksheet);

        // Return the parsed JSON data
        return jsonData;
    } catch (error) {
        // Log the error and return it to handle it gracefully
        console.error(`Error reading Excel file at ${filePath}:`, error.message);
        return null;  // Or throw an error if you want to stop the execution
    }
}

// Export the function so it can be reused
export default {
    getExcelData
};
