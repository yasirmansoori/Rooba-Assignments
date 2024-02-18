const fs = require('fs');
const path = require('path');
const logFilePath = path.join(__dirname, '../logs', 'requests.log');

// Custom middleware function for logging
const logRequest = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.originalUrl;
  const accessToken = req.headers.authorization || 'No Access Token';

  // Log the request information in the console
  console.log(`[${timestamp}] ${method}: ${url}, AccessToken: "${accessToken}"`);

  // log the request information in the file
  const logMessage = `[${timestamp}] ${method}: ${url}, AccessToken: "${accessToken}"\n`;
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.log('Error writing to log file');
    }
  });

  // next middleware 
  next();
};

// Export module
module.exports = logRequest;
