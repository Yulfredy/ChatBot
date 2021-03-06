var express = require('express'),
    routes = require('./routes'),
    user = require('./routes/user'),
    http = require('http'),
    path = require('path'),
    fs = require('fs');

var app = express();

var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var multipart = require('connect-multiparty')
var multipartMiddleware = multipart();

app.set('port', process.env.PORT || 5000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/style', express.static(path.join(__dirname, '/views/style')));


if ('development' == app.get('env')) {
    app.use(errorHandler());
}
var watson = require('watson-developer-cloud');
app.get('/', routes.index);


var conversation = new watson.AssistantV1({
    iam_apikey: 'Su API KEY',
    url: 'Su URL',
    version: '2018-07-10'
});
var workspace = 'Su WorkSpace';

app.post('/converse', function(req, res, next) {
    var payload = {
        workspace_id: workspace,
        context: {},
        input: {}
    };

    if (req.body) {
        if (req.body.input) {
            payload.input = { text: req.body.input };
        }
        if (req.body.context) {
            payload.context = req.body.context;
        }
    } else {
        payload = {};
    }
    conversation.message(payload, function(err, data) {
        if (err) {
            console.log(err);
        } else {
            return res.json(data);
        }
    });
});
http.createServer(app).listen(app.get('port'), '0.0.0.0', function() {
    console.log('Express server listening on port ' + app.get('port'));
});