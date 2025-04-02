// Создайте новый файл с именем `chat_app.js`.
//  Импортируйте модуль `events` и создайте экземпляр `EventEmitter`. 
//  Напишите функцию `sendMessage`, которая принимает имя пользователя, сообщение и объект `EventEmitter`. 
//  Внутри функции `sendMessage` генерируйте событие `message` с именем пользователя и сообщением.
//   Зарегистрируйте обработчик для события `message`, чтобы выводить сообщение в формате "User: Message". 
//   Вызовите функцию `sendMessage` несколько раз с разными пользователями и сообщениями.

const EventEmitter = require('events'); // Импорт модуля 'events'
const emitter = new EventEmitter(); // Создаём экземпляр EventEmitter

// Функция отправки сообщения
const sendMessage = (username, message, emitter) => {
    emitter.emit('message', username, message); // Генерируем событие 'message'
};

// Обработчик события 'message'
emitter.on('message', (username, message) => {
    console.log(`${username}: ${message}`); // Вывод сообщения в формате "User: Message"
});

// Вызовы функции sendMessage
sendMessage('Alice', 'Привет всем!', emitter);
sendMessage('Bob', 'Как дела?', emitter);
sendMessage('Charlie', 'У меня всё отлично!', emitter);

