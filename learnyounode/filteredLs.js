'use strict';
const fs = require('fs');
const path = require('path');
let fileDir = process.argv[2];

fs.readdir(fileDir, (err, list) => {
	list.forEach((filename) => {
		if(path.extname(filename) ===  '.' + process.argv[3]) {
			console.log(filename);
		}
	});
});

//another solution (given by nodeschool)
/*
var fs = require('fs')
 var path = require('path')

 var folder = process.argv[2]
 var ext = '.' + process.argv[3]

 fs.readdir(folder, function (err, files) {
   if (err) return console.error(err)
   files.forEach(function(file) {
       if (path.extname(file) === ext) {
           console.log(file)
       }
   })
 })
*/