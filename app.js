const http=require('http')


http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('github push ,docker jenkin github test')
}).listen(8089)

console.log('lightho ')