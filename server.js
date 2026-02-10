const express = require('express');
const app = express();
const PORT = 3000;

// الصفحة الرئيسية
app.get('/', (req, res) => {
    res.send('مرحبا بك في Backend عملي!');
});

// API صغير
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from Node.js Backend!' });
});

// تشغيل السيرفر
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
