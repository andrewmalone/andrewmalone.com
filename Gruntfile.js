module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		shell: {
            jekyllBuild: {
                command: 'jekyll build'
            }
        },
		connect: {
            server: {
                options: {
                    port: 8080,
                    base: '_site'
                }
            }
        },
		watch: {
          livereload: {
            files: [
                '_config.yml',
                'index.html',
                '_layouts/**',
                '_posts/**',
                '_includes/**',
                'css/**'
            ],
            tasks: ['shell:jekyllBuild'],
            options: {
              livereload: true
            },
          },
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['connect', 'watch']);

};