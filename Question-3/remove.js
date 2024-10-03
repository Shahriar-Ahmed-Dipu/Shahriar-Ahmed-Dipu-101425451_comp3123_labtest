const fs = require('fs');                  // Import the 'fs' (file system) module to work with files and directories
const path = require('path');              // Import the 'path' module to handle and join file paths

const logsDir = path.join(__dirname, 'Logs');  // Create the path to the Logs directory

// Check if the Logs directory exists
if (fs.existsSync(logsDir)) {               
    // If it exists, read the files in the Logs directory and delete each file
    fs.readdirSync(logsDir).forEach(file => {
        console.log(`Deleting file: ${file}`);  // Log the name of the file being deleted
        fs.unlinkSync(path.join(logsDir, file)); // Delete the file
    });

    // After deleting all the files, delete the Logs directory itself
    fs.rmdirSync(logsDir);
    console.log('Logs directory deleted.');   // Log that the directory has been deleted
} else {
    // If the Logs directory doesn't exist, log this information
    console.log('Logs directory does not exist.');
}
