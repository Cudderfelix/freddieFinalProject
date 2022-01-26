const express = require('express');

// express app
const app = express();


// register view engine    
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {

    res.render('landing', { title: 'Welcome' });
});

app.get('/index.html', (req, res) => {
    res.render('index', { title: 'Home' });
});

app.use((req, res) => {
    res.render('404', { title: '404 Error' });
});

//app.get('/about-us', (req, res) => {
//    res.redirect('/about');
//});