module.exports = {
	default: {
		files: [{
			expand: true,
			cwd: 'assets/img/_source/',
			src: ['**/*.{png,jpg,jpeg,gif,svg}'],
			dest: 'assets/img'
		}]
	},
	svg: {
		files: [{
			expand: true,
			cwd: '_includes/svg',
			src: ['*.svg'],
			dest: '_includes/svg/o'
		}]
	}
}