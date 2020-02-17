// Update with your config settings.

const folder = "__static" in global ? __static : "./static";

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './vendi.dev.db'
    },
    migrations:{
      directory: `${folder}/migrations`
    }
  },

  production: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: `${process.env.HOME}/.vendi.db`
    },
    migrations:{
      directory: `${folder}/migrations`
    }
  }

};
