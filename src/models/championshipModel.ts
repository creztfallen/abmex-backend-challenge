import { DataTypes } from 'sequelize';
import connection from '../database/connection';
import Team from './teamModel';


const Championship = connection.define('championship', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  prize: {
    type: DataTypes.STRING
  }
}, 
{timestamps: false} );



export default Championship