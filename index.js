const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json([{
        name: 'chala',
        email: 'chala@gmail.com'
    }, {
        name: 'abebe',
        email: 'abebe@gmail.com'
    }, {
        name: 'Belete',
        email: 'belete@gmail.com'
    }
    ])
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})