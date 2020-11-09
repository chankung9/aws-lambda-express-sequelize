module.exports = function (sequelize, DataTypes) {
  return sequelize.define('consumers', {
    id: { 
      type: Sequelize.BIGINT, 
      primaryKey: true 
    },
    firstName: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0,
      primaryKey: true
    },
    cnt: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: 0
    },
    last_update: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'txn_per_cst_per_day',
    schema: 'public',
    timestamps: false,
  });
};
