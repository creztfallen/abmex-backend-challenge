import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import 'dotenv/config';

import connection from './database/connection';
import championship from './api/v1/routes/championship';
import team from './api/v1/routes/team';
import match from './api/v1/routes/match';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

try {
    connection.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database.', error);
}

app.use('/api/v1/championships', championship);
app.use('/api/v1/teams', team);
app.use('/api/v1/matches', match)

const PORT = process.env.PORT || 3000;

try {
    app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
} catch (error) {
    console.log(`Error: ${error}`)
};