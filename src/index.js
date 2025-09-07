import express from 'express';
import handlebars from 'express-handlebars';
import router from './routes.js';


const app = express();

app.engine('hbs', handlebars.engine({ 
    extname : 'hbs',
}));
 
app.set('view engine', 'hbs');
app.set('views', './src/views'); 
app.use(express.static('public')); 

app.use(router);


app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));
