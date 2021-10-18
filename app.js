require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

app.set('view engine', 'hbs');
hbs.registerPartials( __dirname + '/views/partials' )

app.use( express.static( 'public' ) );

app.get('/', (req, res) =>  {
  //res.sendFile( __dirname + '/public/index.html' );

  res.render( 'home', {
	  nombre: 'Javiera Quiñones',
	  titulo: 'Node.js'
  } );
});

app.get( '/generic', ( req, res ) => {
    // res.sendFile( __dirname + '/public/generic.html' );

	res.render( 'generic', {
		nombre: 'Javiera Quiñones',
		titulo: 'Node.js'
	} );
} );

app.get( '/elements', ( req, res ) => {
    // res.sendFile( __dirname + '/public/elements.html' );

	res.render( 'elements', {
		nombre: 'Javiera Quiñones',
		titulo: 'Node.js'
	} );
} );

app.get( '*', ( req, res ) => {
    res.sendFile( __dirname + '/public/404.html' );
} );

app.listen( port, () => {
	console.log( `Escuchando en el puerto: ${port}` );
} );
