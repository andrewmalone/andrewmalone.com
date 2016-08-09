module.exports = {
	default: {
		files: [{
			expand: true,
			cwd: 'images/_src/',
			src: ['**/*.{png,jpg,jpeg,gif,svg}'],
			dest: 'images'
		}]
	},
	svg: {
		files: [{
			expand: true,
			cwd: '_includes/svg/_src',
			src: ['*.svg'],
			dest: '_includes/svg/o'
		}]
	}
}