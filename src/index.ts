import express from 'express';
const app = express();
import * as bodyParser from 'body-parser';
import 'dotenv/config';
import {Sequelize} from 'sequelize';

const championship = require("./api/v1/routes/championship");


const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const db_name = process.env.DB_NAME;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

if (!db_name){
    throw new Error('Gimme the envs, baby.')
}

if (!db_username){
    throw new Error('Gimme the envs, baby.')
}

if (!db_password){
    throw new Error('Gimme the envs, baby.')
}

const sequelize = new Sequelize(db_name, db_username, db_password, {
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