const http=require('http')


http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('debi first web mp2')
}).listen(3000)

console.log('server runing on 8081')