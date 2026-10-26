const mysql = require('mysql2');

const connection = mysql.createConnection({
host: process.env.DB_HOST || 'localhost',
user: process.env.DB_USER || 'root',
password: process.env.DB_PASSWORD,
database: process.env.DB_NAME || 'hospitaldb'
});

connection.connect((err)=>{
if(err){
console.log(err);
}
else{
console.log("Database Connected");
}
});

module.exports = connection;
