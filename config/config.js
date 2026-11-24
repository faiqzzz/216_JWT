require("dotenv").config

const development = 
{
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env_DB_DATABASE,
    host: process.env_DB_HOST,
    port: process.env_DB_PORT,
    dialect: process.env_DB_DIALECT
}

module.exports = {development};
