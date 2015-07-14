//watcher-spawn.js
"use strict";
const
	fs = require('fs'),
	spawn = require('child_process').spawn,
	filename = process.argv[2];
if(!filename){
	throwError("A file to watch must be specified");
}
fs.watch(filename, function(){
	let ls = spawn('ls', ['-lh', filename]);
	ls.stdout.pipe(process.stdout);
});
console.log("Now watch" + filename + "for changes...");