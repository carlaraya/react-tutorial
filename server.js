var connect = require('connect');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

console.log(history);

var app = connect();

app.use(serveStatic(__dirname + '/dist'));
app.use(history());
app.listen(8081, function(){
    console.log('Server running on 8081...');
});
