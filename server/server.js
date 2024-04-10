const express = require('express');
const app = express();
const apiRouter = require('./routes/member');
var path = require('path');

app.use(express.json()); // convert body response to json

app.use('/member', apiRouter);
app.use(express.static(path.join(__dirname, 'public')));


app.listen('3000', () => {

    console.log('Server is running on PORT 3000');

});
