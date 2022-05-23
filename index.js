import express from "express";
import countryRouters from "./routers/countryRouters.js";

const app = express();
const port = process.env.PORT || 5001;

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.json());
app.use("/api/countries", countryRouters); 

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
  });

  // about page
app.get('/about', function(req, res) {
    res.render('pages/about');
  });



app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`)
});