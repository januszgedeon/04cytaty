module.exports = {
	scripts: {
		files: ['style/*.sass', 'js/main.js'],
		tasks: ['sass', 'autoprefixer', 'uglify', 'cssmin'],
		options: {
			spawn: false,
		},
	}
};