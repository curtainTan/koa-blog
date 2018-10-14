/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('list', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    user_name: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    caogao: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    label: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    comment: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    time: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    click_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    like_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    other: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'list'
  });
};
