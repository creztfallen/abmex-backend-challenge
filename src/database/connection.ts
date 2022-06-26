import {Sequelize} from 'sequelize';
import 'dotenv/config';

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

const connection = new Sequelize(db_name, db_username, db_password,
    {
        host: 'localhost',
        dialect: 'postgres'
    });


export default connection;

