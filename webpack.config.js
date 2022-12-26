'use strict';

let path = require('path');

module.exports = {
	mode: 'development', //режим в котором будет работать webpack
	entry: './src/js/script.js', //файл с которого будем начинать
	output: { //конфигурируем файл выхода
	filename: 'bundle.js', //название файла
	path: __dirname + '/dist/js' //туда, куда будем складывать
	},
	watch: true, //будет собирать проект каждый раз когда будем сохранять файл

	devtool: "source-map", //

	module: {}
};
