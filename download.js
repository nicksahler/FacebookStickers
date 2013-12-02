var list = require('./original.json');
var fs = require('fs');
var request = require('request');

for (var c in list) {
	for (var i in list[c]) {
		if(!fs.existsSync('images/' + c)) fs.mkdir('images/' + c);
		request(list[c][i]).pipe(fs.createWriteStream('images/' + c + '/' + i + '.png'))
	}
}