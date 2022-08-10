require('dotenv').config({
    path: './.env',
});

module.exports = {
    client: 'pg',
    connection:
        process.env.DATABASE_URL ||
        `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@127.0.0.1:5432/fragrapedia`,
    searchPath: 'public',
    migrations: {
        directory: './db/migrations',
    },
    seeds: {
        directory: './db/seeds',
    },
};

// require('dotenv').config();

// module.exports = {
//     client: 'pg',
//     connection: process.env.DATABASE_URL || {
//         host: process.env.DB_HOST || '127.0.0.1',
//         port: process.env.DB_PORT || 5432,
//         database: process.env.DB_NAME,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//     },
//     searchPath: 'public',
//     migrations: {
//         tableName: 'knex_migrations',
//         directory: __dirname + '/db/migrations',
//     },
//     seeds: {
//         directory: __dirname + '/db/seeds',
//     },
// };
