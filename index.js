const express = require ('express')
const path = require ('path')
const app = express () 
app.use(express.urlencoded({extended:false}))
// app.use(express.static(__dirname+'/public'))
app.use(express.static(path.join(__dirname, '/public')));
const mysql = require ('mysql')
var pool = mysql.createPool ({
	connectionLimit : 10, /*diez dispositivos conectados*/
	host: "localhost",
	user: "root",/*root es el nombre del usuario que trae xammp*/
	password: "",
	database: "mangastore", /*llamamos al nombre de la base de datos


	*/
	
})

app.get("/",(req,res) => {
	res.sendFile(path.join(__dirname,"/public/html/inicio.html")) /*linea de ruta absoluta*/

})

// app.get("/",(req,res) => {
// 	res.sendFile(path.join(__dirname,"/public/css/estilo.css")) /*linea de ruta absoluta*/

// })

// app.get("/",(req,res) => {
// 	res.sendFile(path.join(__dirname,"/public/css/usuarios.css")) /*linea de ruta absoluta*/

// })

// app.get("/",(req,res) => {
// 	res.sendFile(path.join(__dirname,"/public/css/imblog.css")) /*linea de ruta absoluta*/

// })

// app.get("/",(req,res) => {
// 	res.sendFile(path.join(__dirname,"/public/css/shonen.css")) /*linea de ruta absoluta*/

// })

/*app.get("/productos",(req,res) => {
	res.sendFile(path.join(__dirname,"/public/html/productos.html"))
	
})*/

app.get("/shonen",(req,res) => {
	res.sendFile(path.join(__dirname,"/public/html/shonen.html"))
	
})

app.get("/seinen",(req,res) => {
	res.sendFile(path.join(__dirname,"/public/html/seinen.html"))
	
})

/*app.get("/ediesp",(req,res) => {
	res.sendFile(path.join(__dirname,"/public/html/usuarios.html"))
	
})*/

app.get("/usuarios",(req,res) => {
	res.sendFile(path.join(__dirname,"/public/html/usuarios.html"))
	
})

app.get("/comics",(req,res) => {
	res.sendFile(path.join(__dirname,"/public/html/comics.html"))
	
})



app.post("/reg",(req,res) => {

	console.log(req.body)

	let email = req.body.email;

	let contraseña = req.body.contraseña;

	let nombre = req.body.nombre;

	let sql = "insert into usuarios (email,contraseña,nombre) values ('"+email+"','"+contraseña+"','"+nombre+"')"; /*string concatenado*/

	/*('${email}','${clave}') interpolacion*/ 

	pool.query(sql,(error,result,campo) => {
		res.send(result);


	})
}) /*req=request*/







app.listen (3000,() => { console.log ('Server on 3000 Version con mas errores que antes')
	})/*esto va al final de todo*/

