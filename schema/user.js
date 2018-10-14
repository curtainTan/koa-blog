/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.CHAR(50),
      allowNull: false
    },
    psw: {
      type: DataTypes.CHAR(128),
      allowNull: false
    },
    admin: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    signature: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    msg: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    headimg: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    work: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    introduce: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'user'
  });
};
