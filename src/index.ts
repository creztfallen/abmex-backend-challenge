import express from 'express';
const app = express();
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import {Sequelize} from 'sequelize';

const championship = require("./api/v1/routes/championship");

dotenv.config({path:__dirname + "../config/config.env"});
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const db_name = process.env.DB_NAME;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

console.log(db_password);

const sequelize = new Sequelize('abmex2', 'mat', 'gunesimi', {
    host: 'localhost',
    dialect: 'postgres'
});

try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

app.use('/', championship);


try{app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
} catch (error){console.log(`Error: ${error}`)};