const http=require('http')


http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('debi first web mp2 ttt')
}).listen(8089)

console.log('8090 bbbb')