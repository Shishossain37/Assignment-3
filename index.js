const http=require('http')
const fs=require('fs')
const fileContent=fs.readFileSync('index.html')

const server=http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-type':'text/html'})
    resp.end(fileContent)
})

server.listen(80,'127.0.0.1',()=>{
    console.log('App is runnig on port 80');
})