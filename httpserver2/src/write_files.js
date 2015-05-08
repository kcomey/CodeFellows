var fs = require('fs');
var path = require('path');
var matchedFiles = [];

function writeFiles(dirName, fileExt,
  function callback (err, list) {
    if (err) {
      console.log("Getting an error!");
    }



    fs.readdir(dirPath, function callback (err, list) {
    list.forEach(function(file) {
      if (path.extname(file) === ('.' + fileExt)) {
        matchedFiles.push(file);
      }
    });
    });

    return matchedFiles;
});




exports.writeFiles = writeFiles;
