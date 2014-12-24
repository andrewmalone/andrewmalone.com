module.exports = {
	livereload: {
        files: [
            '_config.yml',
            'index.html',
            '_layouts/**',
            '_posts/**',
            '_drafts/**',
            '_includes/**',
            'css/**',
            'christmas/**',
            '_data/**'
        ],
        tasks: ['sass', 'autoprefixer', 'jshint', 'shell:jekyllBuild'],
        options: {
          livereload: true
        }
    }
}