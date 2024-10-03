const fs = require('fs');                  // Import the 'fs' (file system) module to work with the file system
const path = require('path');              // Import the 'path' module to handle and transform file paths

const logsDir = path.join(__dirname, 'Logs'); // Create the path to the Logs directory

// Check if the Logs directory exists, and if not, create it
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);                  // Create the Logs directory
    console.log('Logs directory created.');  // Output that the directory was created
}

// Loop to create 10 log files inside the Logs directory
for (let i = 1; i <= 10; i++) {
    const filePath = path.join(logsDir, `log${i}.txt`);  // Define the file path for each log file
    fs.writeFileSync(filePath, `This is log file number ${i}`); // Write content into each log file
    console.log(`Created file: log${i}.txt`);             // Output the file name after it's created
}
