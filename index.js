const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', function (req, res){
	// res.send('hello world')
	res.render('index')
})

app.listen(8000, function(){
	console.log('listening on port 8000')
})