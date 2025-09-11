import handlebarsInit from './config/handlebars.js';
import expressInit from './config/express.js';
import routes from './routes.js';
import express from 'express';
import mongooseInit from './config/mongooseInit.js';


const app = express();

mongooseInit();
handlebarsInit(app);
expressInit(app);
app.use(routes); 


app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));
