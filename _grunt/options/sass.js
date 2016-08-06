module.exports = {
	dist: {
      options: {
	    style: 'compressed'  
      },
      files: {
        'css/main.css': 'css/_src/main.scss',
        'css/styleguide.css': 'css/_src/styleguide.scss'
      }
    }
}