const { Client } = require("pg");

const settings = {
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
}

console.log(settings);

const client = new Client(settings);

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
