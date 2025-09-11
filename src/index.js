import handlebarsInit from './config/handlebars.js';
import expressInit from './config/express.js';
import routes from './routes.js';


const app = express();

handlebarsInit(app);
expressInit(app);
app.use(routes);


app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));
