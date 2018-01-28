const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
//
app.all('/homepage', function (request, response) {
    response.sendFile(__dirname + '/public/index.html');
})

app.set('port', (process.env.PORT || 5000));

app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});
