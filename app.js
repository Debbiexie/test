const http=require('http')


http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('debi first web ')
}).listen(3000)

console.log('server runing on 8081')