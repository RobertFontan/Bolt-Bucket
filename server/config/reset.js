// create tables to store the custom items and any other data   
// custom item table

import { pool } from "./database.js";
import './dotenv.js'

const createCarTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS cars;

        CREATE TABLE IF NOT EXISTS cars (
            id SERIAL PRIMARY KEY,
            name VARCHAR(128) NOT NULL,
            exterior VARCHAR(128) NOT NULL,
            roof VARCHAR(128) NOT NULL,
            wheels VARCHAR(128) NOT NULL       
        )`

    try {
        await pool.query(createTableQuery)
    }
    catch (err){
        console.error('Error creating table', err)
    }

}

// would I need to seed the table?

createCarTable()



