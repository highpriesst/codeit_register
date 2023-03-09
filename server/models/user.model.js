module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("User", {
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    login: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [4, 20],
      },
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        len: [2, 50],
      },
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    birthDate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    agreedToTerms: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        is: true,
      },
    },
  });

  return User;
};
