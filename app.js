const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>
{
       console.log(req.url);

       fs.readFile('./html/adi.html',(err,data)=>
       {
        if(err)
        {
            console.log(err)
        }
        else{
            res.setHeader('Content-Type', 'text/html' )
            res.write(data)
            res.end()
        }
       })
})

server.listen(3000,'localhost',()=>
{
    console.log('Request Haver been Submitted to the server')
})