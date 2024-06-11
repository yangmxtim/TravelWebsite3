const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'iiii'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL server.');
});

app.get('/comments', (req, res) => {
    db.query('SELECT * FROM comment', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving comments');
            return;
        }
        res.json(results);
    });
});

app.post('/comments', (req, res) => {
    const { name, rate, content } = req.body;
    const date = new Date().toISOString().slice(0, 19).replace('T', ' '); // 格式化日期
    const query = 'INSERT INTO comment (name, rate, content, date) VALUES (?, ?, ?, ?)';
    
    db.query(query, [name, rate, content, date], (err, results) => {
        if (err) {
            res.status(500).send('Error inserting comment');
            return;
        }
        res.status(201).send('Comment added');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
