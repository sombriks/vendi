// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './vendi.dev.db'
    },
    migrations:{
      directory: `${__static}/migrations`
    }
  },

  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: `${process.env.HOME}/.vendi.db`
    },
    migrations:{
      directory: `${__static}/migrations`
    }
  }

};
