const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
// const router = express.Router()

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const port = 3001

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


// post method route
app.post('/login', function (req, res) {
    connection.query('SELECT * FROM `users`', function (error, results, fields) {
        console.log( results, req.body)
        // console.log(results[1].user_name, '????')
        if(results && results.length !== 0) {
            let flag = 0
            results.map(item => {
                if (item.user_name === req.body.userName && item.password === req.body.password) {
                    flag = 1
                    res.json({
                        code: 0,
                        msg: '登录成功'
                    })
                    res.end()
                }
            })
            if (flag === 0) {
                res.json({
                    code: 1,
                    msg: '登陆失败'
                })
                res.end()
            }
        }
    })



    // res.send('POST request to the homepage');
});

// connection.end()

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


