module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      status: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    {
      defaultScope: {
        attributes: { exclude: ["password"] },
      },
      scopes: {
        withSecretColumns: {
          attributes: { include: ["password"] },
        },
      },
    }
  );
  users.associate = () => {
    // associations can be defined here
  };
  return users;
};
