const express = require('express')
const mysql = require('mysql')
const e = require("express");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'belog-user'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    } else {
        console.log('连接成功success666')
    }
})
connection.query('SELECT * FROM `users`', function (error, results, fields) {
    if (error) throw error
    else  console.log(results, 'result')
    // connected!
})

connection.end()
