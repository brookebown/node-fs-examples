//watcher-argv.js
const
	fs = require('fs'),
	filename = process.argv[2];
if(!filename) {
	throwError("a file to watch must be specified!");
}
fs.watch(filename, function() {
console.log("file" + filename + "just changed!");
});
concole.log("Now Watching" + filename + "for changes...");