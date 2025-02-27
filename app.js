//Importing express and all other modules on top
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

//Setting up the view engine and it's directory
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//All Express middleware/ Static files
app.use(express.urlencoded({extended: true}));  //req.body is parsed as a form
app.use(methodOverride('_method')); //Setting the query for method-override
app.use(express.static(path.join(__dirname, 'public'))); //It will serve our static files

//Default Index Route
//We don't need to add backslash when rendering view pages
app.get('/', (req, res) => {
    res.send('Welcome to ML/AI Portal');
});

//Homepage Route
app.get('/home', (req, res) => {
    res.render('home/home.ejs');
});

//About Page Route
app.get('/about', (req, res) => {
    res.render('aboutUs/about.ejs');
});

//Service Page Route
app.get('/service', (req, res) => {
    res.render('servicePage/service.ejs');
});

//Course page Route
app.get('/course', (req, res) => {
    res.render('coursePage/course.ejs');
});


//Starting up server
app.listen(3000, () => {
    console.log("You are listening at PORT: 3000");
})