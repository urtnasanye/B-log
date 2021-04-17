var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var connection = require('./connection/connection');
var path = require('path');
var dotenv=require('dotenv');
var ejs= require('ejs');
var fileUpload=require('express-fileupload');


//Local modules Route
var login = require('./routes/login');
var register=require('./routes/register');
 var home=require('./routes/home');
 var news=require('./routes/news');
 var contact=require('./routes/contact');
 var architecture=require('./routes/architecture');
 var geisha=require('./routes/geisha');
 var tea=require('./routes/tea');
 var indextopics=require('./routes/indextopics');
 var create=require('./routes/create');
 var createtopics=require('./routes/createtopics');
 var creare=require('./routes/creare');
 var admin=require('./routes/admin');
 var contactUser=require('./routes/contactUser');
//  var category=require('./routes/category');
var pastel=require('./routes/pastel');


 var edit_users=require('./routes/edit_users');
 var delete_user=require('./routes/delete_user');

 var edit_post=require('./routes/edit_posts');
 var delete_post=require('./routes/delete_posts');


dotenv.config();   

var app = express();
app.use(fileUpload());

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/uploads'));

app.set("views", path.join(__dirname, "view"));
app.set('view engine', 'ejs');


app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());





 //app.get('/login', function(request, response) {
//response.sendFile(path.join(__dirname + '/NewPage.html'));
 //});
 app.use('/', login);
 app.use('/', register)
 app.use('/', home);
 app.use('/', news);
  app.use('/',contact);
  app.use('/',architecture);
  app.use('/', geisha);
  app.use('/',tea);
  app.use('/', indextopics);
  app.use('/', create);
 app.use('/', createtopics);
  app.use('/', creare);
 app.use('/',admin);
 app.use('/',contactUser);
 //  app.use('/',category);
app.use('/', pastel);

 //Post
 app.use('/', edit_post);
 app.use('/', delete_post);

 //User
 app.use('/', edit_users);
 app.use('/', delete_user);


 //File upload
 //app.use(fileUpload());






// app.post('/img/:posts_id', async(request,response)=>{
//    var posts_id=request.params.posts_id;
//    var title=request.body.title;
//    var description=request.body.description;
//   var date=request.body.date;
//    var file=await knex('file').where({posts_id: posts_id}).first();
//    if(file){
	// const contentType = await FileType.fromBuffer(file.file); 
	// res.type(contentType.mime); 
	//    response.end(file.file);

//    }else{
	//    response.end('No Img with that Id!')
//    }
   
// })


// app.get('/news', function(request, response) {
	// response.sendFile(path.join(__dirname + '/newsPage.html'));
// });


//baisannn//app.get('/admin', function(request, response) {
//	response.sendFile(path.join(__dirname + '/index(.html'));
//});

// app.get('/geisha', function(request, response) {
	// response.sendFile(path.join(__dirname + '/Geisha-Japan (more).html'));
// });

//app.get('/contact', function(request, response) {
//	response.sendFile(path.join(__dirname + '/contact.html'));
//});

// app.get('/arhitektur', function(request, response) {
	// response.sendFile(path.join(__dirname + '/Japanese Arhichektur.html'));
// });

// app.get('/tea', function(request, response) {
	// response.sendFile(path.join(__dirname + '/Tea ceremony japanese.html'));
// });

//app.get('/registerPage', function(request, response) {
//	response.sendFile(path.join(__dirname + '/NewPage.html'));
//});

//app.get('/indextopics', function(request, response) {
//	response.sendFile(path.join(__dirname + '/index(topics).html'));
//});

//app.get('/create', function(request, response) {
//	response.sendFile(path.join(__dirname + '/create.html'));
//});

//app.get('/createtopics', function(request, response) {
//	response.sendFile(path.join(__dirname + '/create(topics).html'));
//});

//app.get('/indexusers', function(request, response) {
//	response.sendFile(path.join(__dirname + '/index(users).html'));
//});

//app.get('/creare', function(request, response) {
//	response.sendFile(path.join(__dirname + '/creare(users).html'));
//});



// app.post('/auth', function(request, response) {
	// var username = request.body.username;                                     //body dotorh name ni username tei bwl 
	// var password = request.body.password;
	// if (username && password) {
		// connection.query('SELECT * FROM registerUsers WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// console.log(results);
			// if (results.length > 0) {
				// request.session.loggedin = true;
				// request.session.username = username;
				// response.redirect('/admin');
			// } else {
				// response.send('Incorrect Username and/or Password!');
			// }			
			// response.end();
		// });
	// } else {
		// response.send('Please enter Username and Password!');
		// response.end();
	// }
// });

//app.get('/admin', function(request, response) {
//	 if (request.session.loggedin) {
	//	 response.sendFile(path.join(__dirname + '/index(.html'));
	// } else {
	//	 response.sendFile(path.join(__dirname + '/NewPage.html'));
//	 }
// });

// app.post('/register',function(request,response){
//  var username=request.body.username;
//   var lastname=request.body.lastname;
//   var email=request.body.email;
//  var password=request.body.password;
//   connection.query( 'INSERT INTO `registerUsers`( username, email, password)  VALUES (?,?,?);',[username,email,password],
// function(error, results, fields){
	// response.redirect('/');
//   });
// });





//update
 // connection.connect(function(err) {  
//	if (err) throw err;  
//	var sql = "UPDATE registerUsers SET username = 'Urta' WHERE rUsers_id = '3'";  
//	connection.query(sql, function (err, result) {  
//	if (err) throw err;  
//	console.log(result.affectedRows + " record(s) updated");  
//	});  
//	}); 

//select from
//  connection.connect(function(err) {
//	if (err) throw err;
//	connection.query("SELECT username, password FROM registerUsers", function (err, result, fields) {
//	  if (err) throw err;
//	  console.log(result);
///	});
//  });

//limit     --->idgar
//  connection.connect(function(err) {
//	if (err) throw err;
//	var sql = "SELECT * FROM registerUsers LIMIT 3";
//	connection.query(sql, function (err, result) {
//	  if (err) throw err;
//	  console.log(result);
//	});
//  });

  //order BY
 // connection.connect(function(err) {
//	if (err) throw err;
//	connection.query("SELECT * FROM registerUsers ORDER BY username", function (err, result) {
//	  if (err) throw err;
//	  console.log(result);
///	});
 // });

 //Delete
// connection.connect(function(err) {
//	if (err) throw err;
	// var sql = "DELETE FROM registerUsers WHERE username='Urta'";
	// connection.query(sql, function (err, result) {
	//   if (err) throw err;
	//   console.log("Number of records deleted: " + result.affectedRows);
	// });
//   });

app.listen(process.env.SERVER_PORT, () => console.log(`Server start ${process.env.SERVER_PORT}`));