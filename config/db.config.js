module.exports = {

  HOST: "ec2-54-219-178-4.us-west-1.compute.amazonaws.com",
  USER: "postgres",
  PASSWORD: "sdi123qwe",
  DB: "tyaidoo",

  port: 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

};
