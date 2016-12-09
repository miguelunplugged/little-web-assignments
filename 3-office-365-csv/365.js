var fs = require('fs');
function callback(err, data) {
  var lines = data.split('\n');
  //console.log(lines);

  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];
    var lineValues = line.split(',');
    var userName = lineValues[0];
    var displayName = lineValues[3];

    console.log(userName + "    " + displayName);
  }
  
};

fs.readFile('Import_User_Sample_en.csv','utf-8', callback);
