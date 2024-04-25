const express = require('express');
const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql');
const connection = mysql.createConnection(config);

const createTableQuery = `
    CREATE TABLE IF NOT EXISTS people (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255)
    )
`;
connection.query(createTableQuery, (error, results, fields) => {
    if (error) {
        console.error('Erro ao criar tabela:', error);
    } else {
        console.log('Tabela criada com sucesso ou já existe.');
    }
});

const insertDataQuery = `INSERT INTO people(name) values('RaulTeste')`;
connection.query(insertDataQuery, (error, results, fields) => {
    if (error) {
        console.error('Erro ao inserir dados:', error);
    } else {
        console.log('Dados inseridos com sucesso.');
    }
});

connection.end();

app.get('/', (req,res) => {
    res.send('<h1>Full Cycle Rocks</h1>');
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
