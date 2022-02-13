const http=require('http')


http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'})
	res.end('github push ,then via pm2 restart app test')
}).listen(8089)

console.log('lightho ')