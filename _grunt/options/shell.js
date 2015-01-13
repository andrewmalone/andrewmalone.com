module.exports = {
	jekyllBuild: {
        command: 'jekyll build --drafts --config _config.yml,_config-dev.yml'
    },
    jekyllPublish: {
        command: 'jekyll build'
    }

}