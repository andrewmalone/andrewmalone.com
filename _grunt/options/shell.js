module.exports = {
	jekyllBuild: {
        command: 'jekyll build --drafts --config _config.yml,_config-dev.yml'
    },
    jekyllPublish: {
        command: 'jekyll build'
    },
    jekyllPreview: {
	  	command: 'jekyll build --config _config.yml,_config-dev.yml'
    },
    publish: {
	    command: 'rsync -avz --delete -e "ssh -p 2222" ~/Repositories/andrewmalone.com/_site/ amalone@kateleary.net:~/public_html/andrewmalone.com/'
    }

}