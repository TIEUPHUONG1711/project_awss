const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Kết nối DB - Thông tin này sẽ thay đổi khi lên AWS
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'abc123456',
  database: 'database-1'
});

app.get('/status', (req, res) => {
  res.json({ message: "Backend và Database đã thông nhau!" });
});

app.listen(3000, () => console.log('BE đang chạy ở cổng 3000'));