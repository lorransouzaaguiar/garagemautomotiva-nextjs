import mysql from 'mysql2/promise'

export async function getConnetion() {
    const conn = await mysql.createConnection({
        host: 'localhost',
        database: 'garagemautomotiva1',
        port: 3306,
        user: 'root',
        password: 'admin',

    })

    return conn
}

