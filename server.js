var connect = require('connect');
var serveStatic = require('serve-static');
var history = require('connect-history-api-fallback');

console.log(history);

var app = connect();

app.use(serveStatic(__dirname + '/dist'));
app.use(history());
app.listen(process.env.PORT || 8081, function(){
});
