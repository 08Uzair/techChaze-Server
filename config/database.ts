
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: "db.nsodoisahrkspdgggvne.supabase.co",
      port: 5432,
      database: "postgres",
      user: "postgres",
      password: "techChaze@123",
      schema: "public",
      ssl: {
        rejectUnauthorized: false,
      },
    },
    debug: false,
  },
});