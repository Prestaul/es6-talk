
var fs = require('fs'), fsp = require('fs-promise');

// Synchronous calls block execution of ALL code until they complete
var text = fs.readFileSync(filePath);

// Callbacks in node should always take an error object as the first
// argument, followed by any data
fs.readFile(filePath, (err, data) => {
    if(err) return handleError(err);

    useData(data);
});

// Promises have a `then` method which allows you to pass a success
// hanlder and an error handler
fsp.readFile(filePath).then(useData, handleError)
