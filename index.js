var express = require('express'),
	fs = require('fs'),
	path = require('path'),
	marked = require('marked');

express()
	.use(function(req, res, next) {
		console.log("Incoming request: ", req.url);
		next();
	})
	.use('/slides', function(req, res, next) {
		console.log('Slide request', req.path);
		fs.readFile(path.join(__dirname, 'slides', req.path) + '.md', function(err, markdown) {
			if(err) return next(err);

			marked(markdown.toString(), function(err, markup) {
				if(err) return next(err);
				res.send(markup);
			});
		});
	})
	.use('/examples', express.static('examples'))
	.use(express.static('public'))
	.listen(3000);
