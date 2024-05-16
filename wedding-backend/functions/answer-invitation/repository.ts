import { ParticipationAnswer } from "./models";

const { Pool } = require("pg");

// Configure the database connection
const pool = new Pool({
  user: "test_mirrortown",
  host: "swu.h.filess.io",
  database: "test_mirrortown",
  password: "08b211804373a94e85c68697195523801ecd4d82",
  port: 5433,
});

export async function sendParticipationAnswer(data: ParticipationAnswer) {
  const query =
    "INSERT INTO test.participation_answers (confirmation, firstname, lastname, email, phone, food_preference, favorite_drink, playlist_musthave, miscellaneous) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);";
  const values = [
    data.confirmation,
    data.firstname,
    data.lastname,
    data.email,
    data.phone,
    data.foodPreference,
    data.favoriteDrink,
    data.playlistMusthave,
    data.miscellaneous,
  ];

  try {
    const client = await pool.connect();
    const result = await client.query(query, values);
    client.release();
    return result.rows;
  } catch (error) {
    throw error;
  }
}
