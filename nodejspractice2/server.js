const http = require('http');
const fs = require('fs');
const express = require('express');
// const path = require('path');
// const bodyparser = require('body-parser');

// const adminData = require('./routes/admin');
// const shop = require('./routes/shop');
// const app = express();
// const errorController = require('./controller/error');
// const port = 8000;

// app.set('port',port);
// app.set('view engine','ejs');
// app.set('views','views');

// app.use(bodyparser.urlencoded({extended:true}));


// app.use('/admin',adminData.route);
// app.use('/shop',shop);
// app.use(errorController.get404);
// app.listen(port);


// const server = http.createServer(app);
// server.listen('8000');

    



const server = http.createServer((req,res)=>{
    console.log(req.headers);
    console.log(req.url);
    console.log(req.method);
    console.log(req.body);
    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.setHeader('content-type','text/html');
        res.write(`<html> 
                        <head><title></title><head>
                        <body>
                            <form action='/message' method='post'>
                                <input type='type' name='msg'>
                                <button type='submit'> Submit</button>
                            </form>
                        </body>
                    </html>`);
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk);
            console.log('data comes');
        })
        req.on('end',()=>{
            const parsebody = Buffer.concat(body).toString();
            console.log(parsebody);
            const message1 = parsebody.split(' ')[1];
            console.log('end')

            fs.writeFile('message.txt',message1,(err)=>{
                console.log(err);
                return res.end();
            });
        })
        
        console.log('enter');
        res.setHeader('content-type','text/html');
        res.write('<h2>bye</h2>');
        res.end();
     }
    
})
server.listen('8000');
