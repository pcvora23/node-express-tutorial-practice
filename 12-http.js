const http = require('http');


const serer = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to the home page')
    }
    else if (req.url === '/about') {
        res.end('Welcome to the short history')
    } else {
        res.end(`<h1>Oops!</h1>
        <p>The page You are looking is not found</p>
        <a href='/'>Back to home</a>`)
    }
})

serer.listen(5000)