module.exports = {
	livereload: {
        files: [
            '_config.yml',
            '_layouts/**',
            '_posts/**',
            '_drafts/**',
            '_includes/**',
            'css/**',
            'christmas/**',
            '_data/**',
            '_gear/**',
            '*.html',
            '*.md',
            '**/*.md'
        ],
        tasks: ['sass', 'autoprefixer', 'jshint', 'shell:jekyllBuild'],
        options: {
          livereload: true
        }
    }
}