module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		shell: {
            jekyllBuild: {
                command: 'jekyll build --drafts'
            },
            jekyllPublish: {
	            command: 'jekyll build'
            }
        },
		connect: {
            server: {
                options: {
                    port: 8080,
                    base: '_site',
                    open: true
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
                '_drafts/**',
                '_includes/**',
                'css/**',
                'christmas/**',
                '_data/**'
            ],
            tasks: ['sass', 'autoprefixer', 'jshint', 'shell:jekyllBuild'],
            options: {
              livereload: true
            },
          },
        },
        sass: {
		    dist: {
		      options: {
			    style: 'compressed'  
		      },
		      files: {
		        'css/main.css': 'css/main.scss'
		      }
		    }
		},
		autoprefixer: {
			options: {
				browsers: ['last 2 version']
			},
			single_file: {
				src: 'css/main.css',
				dest: 'css/main_prefixed.css'
			}
		},
		jshint: {
			beforeconcat: ['christmas/*.js']
		}
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    //grunt.loadNpmTasks('grunt-contrib-concat');
    //grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass', 'autoprefixer', 'jshint', 'shell:jekyllBuild', 'connect', 'watch']);
	grunt.registerTask('publish', ['sass', 'autoprefixer', 'shell:jekyllPublish']);

};