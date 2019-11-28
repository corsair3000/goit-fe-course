'use strict'

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt('Введіть пароль для входу:');

if (message === null) 
         message = 'отменено пользователем';
else if (message === ADMIN_PASSWORD) 
        message = 'Добро пожаловать!';
        else message = 'Доступ запрещен, неверный пароль!';
alert(message);
