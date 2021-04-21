const moment = require('moment');

module.exports = function(sequelize, DataTypes){
    const Database = sequelize.define('Database',
        {
            id : {type : DataTypes.INTEGER, primaryKey : true, autoIncrement : true},
            name : {type : DataTypes.STRING},
            price : {type : DataTypes.INTEGER},
            description : {type : DataTypes.TEXT}
        }
    );
    Database.prototype.dateFormat = (date) => (
        moment(date).format('YYYY-MM-DD')
    );

    return Database;
}