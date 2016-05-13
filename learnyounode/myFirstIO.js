
  var fs = require('fs');
  var fd = fs.readFileSync(process.argv[2]);
  console.log(fd.toString().split('\n').length - 1);
  /*
   var fs = require('fs')

     var contents = fs.readFileSync(process.argv[2])
     var lines = contents.toString().split('\n').length - 1
     console.log(lines);
  */