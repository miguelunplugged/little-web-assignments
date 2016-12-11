var fs = require('fs');

function parse(callback) {
  console.log('read data-page');

  var callbackForReadFile = function(err, fileContents) {
    console.log('fs.readFile.');

    var output = {
      street: [],
      city: 'CA',
      state: [],
      zip: []
    };

    var lines = fileContents.split('\n');

    for (var i = 1; i < lines.length - 1; i++) {
      var line = lines[i];

      var values = line.split(',');

      output.street.push({
        street: values[0].replace(/"/g, ''),
        city: values[1].replace(/"/g, ''),
        state: values[3].replace(/"/, ''),
        zip: values[2].replace(/"/, '')
      });
    }

    console.log('csv-parse');
    callback(output);
  }
  fs.readFile('Sacramentorealestatetransactions.csv', 'utf-8', callbackForReadFile);

  console.log('finish')
}


module.exports = parse;
