const express = require('express')
ejs = require('ejs')
app = express();


// register view engine    
app.set('view engine', 'ejs');

// listen for requests
let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port);
app.use(express.static('public'));

app.get('/', (req, res) => {

    res.render('landing', { title: 'Welcome' });
});

app.get('/index.html', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.use((req, res) => {
    res.render('404', { title: '404 Error' });
});