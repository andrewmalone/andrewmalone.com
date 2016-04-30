module.exports = function(grunt) {
	grunt.registerTask('default', ['sass', 'autoprefixer', 'jshint', 'shell:jekyllBuild', 'connect', 'watch']);
	grunt.registerTask('preview',['sass', 'autoprefixer', 'shell:jekyllPreview', 'connect', 'watch'])
	grunt.registerTask('publish', ['sass', 'autoprefixer', 'shell:jekyllPublish', 'shell:publish']);
};