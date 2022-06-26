import { DataTypes } from 'sequelize';
import connection from '../database/connection';
import Championship from './championshipModel';

const Teams = connection.define('teams', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  initials: {
    type: DataTypes.STRING
  },
  championship_id: {
    type: DataTypes.STRING}
}, 
{timestamps: false}, );

Teams.belongsTo(Championship, {foreignKey: 'championship_id'});

export default Teams