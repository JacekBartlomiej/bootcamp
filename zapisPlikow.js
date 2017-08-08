var fs = require('fs');

fs.readdir('./', function(err, files) {
    console.log(files);
    fs.writeFile('listaPlików.txt', files, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
});