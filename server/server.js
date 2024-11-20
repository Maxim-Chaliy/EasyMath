const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const { register, login } = require('./controllers/authController');
const { getComments } = require('./controllers/commentController');

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Строка подключения к MongoDB
const uri = 'mongodb+srv://admin:admin@cluster0.yb3vt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// Подключение к базе данных
mongoose.connect(uri)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    })
    .catch(err => {
        console.error('Error connecting to MongoDB', err);
    });

// Регистрация пользователя
app.post('/register', register);

// Вход пользователя
app.post('/login', login);

// Маршрут для получения комментариев из базы данных
app.get('/api/comments/db', getComments);

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});
