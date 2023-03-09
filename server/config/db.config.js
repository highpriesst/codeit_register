module.exports = {
  HOST: "127.0.0.1",
  USER: "root",
  PASSWORD: "password",
  DB: "codeit",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

//max: maximum number of connection
//min: minimum number of connection
//idle: maximum time, in milisconds, connection can be idle before release
//acquire: maximum time, in miliseconds the pool try getting connection then throw error
