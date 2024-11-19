import mysql from 'mysql2';

const shopDB = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "shop"
});

export default shopDB;