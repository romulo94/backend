require('../bootstrap');

module.exports = {
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_URL,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  operatorAliases: false,
  logging: false,
  define: {
    timestamps: true,
    underscored: true,
  },
};
