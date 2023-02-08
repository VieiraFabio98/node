// Update with your config settings.
const path = require("path");
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "dataBase.db")
    },
    pool:{
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cn)
    },
    migrations:{
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true
  }
};
