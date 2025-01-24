const { Client } = require("pg");

const client = new Client({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

client
  .connect()
  .then(() => {
    console.log("Connection successful!");
    client.end();
  })
  .catch((err) => {
    console.error("Connection failed:", err.message);
    client.end();
  });
