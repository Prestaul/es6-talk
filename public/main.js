var SLIDES = [
	'intro',
	'why-es6',
	'let',
	'const',
	'object-literal-improvements',
	'destructuring',
	'function-params',
	'spread',
	'arrow-functions',
	'template-strings',
	'utilities',
	'map',
	'set',
	'for-of',
	'async-javascript',
	'promises',
	'async-await',
	'import-export',
	'other-things'
];
var slideIndex;

function evaluate(code) {
	clearResult();
	code = Babel.transform(code, {
		presets: ['node5'],
		ast: false,
		sourceMaps: 'inline'
	} ).code;

	try {
		var result = eval(code);
		if(result !== undefined) appendResult( result );
	} catch (e) {
		console.error(e.stack);
		appendError(e);
	}
}

function clearResult() {
	output.setValue( "" );
}

function isValueType(val) {
	return typeof val === 'string' || typeof val === 'number' || typeof val === 'boolean';
}
function appendResult() {
	var result = Array.from(arguments).map(val => {
		if(typeof val === 'string') return val;
		return inspectObject(val);
	}).join(' ');

	var session = output.session;
	session.insert({
		row: session.getLength(),
		column: 0
	}, result + '\n');
}

function appendError(err) {
	var session = output.session;
	session.insert({
		row: session.getLength(),
		column: 0
	}, err.toString() + '\n');
}

var originalLog = console.log;
var log = console.log = function() {
	appendResult.apply(null, arguments);
	originalLog.apply(console, arguments);
}

function logIt() {
	return originalLog.apply(console, arguments);
}


var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/javascript");
editor.$blockScrolling = Infinity;
editor.setOptions({
	fontSize: "16px",
	showPrintMargin: false
});
editor.commands.addCommand({
	name: 'Evaluate',
	bindKey: {win: 'Ctrl-Enter',  mac: 'Command-Enter'},
	exec: function( e ) {
		evaluate( e.getSelectedText() || e.getValue() );
	},
	readOnly: true // false if this command should not apply in readOnly mode
});
editor.focus();


var output = ace.edit("output");
output.renderer.setShowGutter(false);
output.renderer.$cursorLayer.element.style.opacity = 0;
output.textInput.getElement().disabled = true;
output.$blockScrolling = Infinity;
output.setOptions({
	fontSize: "16px",
	readOnly: true,
	highlightActiveLine: false,
	highlightGutterLine: false,
	showPrintMargin: false
});
output.commands.commmandKeyBinding = {};

var notes = document.getElementById('notes');
function loadSlide(slide) {
	logIt('Loading slide:', slide);
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', function() {
		notes.innerHTML = this.responseText;
		editor.setValue('');
		clearResult();
		loadExample();
	}, false);
	xhr.open('GET', `/slides/${slide}`, true);
	xhr.send();
}

function setSlideIndex(idx) {
	logIt(idx, Math.max(0, Math.min(idx, SLIDES.length - 1)))
	idx = Math.max(0, Math.min(idx, SLIDES.length - 1));
	if(idx == slideIndex) return;
	slideIndex = idx;

	document.getElementById('prev').style.display = slideIndex > 0 ? 'inline' : 'none';
	document.getElementById('next').style.display = slideIndex < (SLIDES.length - 1) ? 'inline' : 'none';

	loadSlide(SLIDES[slideIndex]);
}

function loadExample(example) {
	if(!example) example = findFirstExample();
	if(!example) {
		logIt('No example found to load...', example);
		return;
	}

	logIt('Loading example:', example);
	clearResult();
	editor.setValue('// Loading...');
	var xhr = new XMLHttpRequest();
	xhr.addEventListener('load', function() {
		editor.setValue( this.responseText );
		editor.navigateFileStart();
		editor.focus();
	}, false);
	xhr.open('GET', `/examples/${example}`, true);
	xhr.send();
}

function findFirstExample() {
	var link = notes.querySelector('a');
	if(!link) return;

	link = link.getAttribute('href');
	if(!link.startsWith('examples/')) return;

	return link.substr(9);
}

notes.addEventListener('click', function(e) {
	if(e.target.tagName !== 'A') return;

	var matched = /\/examples\/([^\/]+)$/.exec(e.target.href);

	if(!matched) {
		logIt('Unknown link:', e.target.href);
	}

	e.preventDefault();
	loadExample(matched[1]);
});

document.getElementById('prev').addEventListener('click', function(e) {
	e.preventDefault();
	setSlideIndex(slideIndex - 1);
});

document.getElementById('next').addEventListener('click', function(e) {
	e.preventDefault();
	setSlideIndex(slideIndex + 1);
});

setSlideIndex(0);
