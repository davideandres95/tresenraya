var React = require('react');
var ReactDOM = require('react-dom');

var Casilla = require('./Casilla.jsx');

var Tablero = React.createClass({
	tableroClick: function (numeroFila, numeroColumna){
		this.props.manejadorTableroClick(numeroFila, numeroColumna);
		this.props.manejadorGanador();
	},
	render: function (){
		let tablero = this.props.valores.map(function (valoresFila, indiceFila){
			let fila = valoresFila.map(function (valor, indiceColumna){
				let mykey = "" + indiceFila + indiceColumna;
				return (
					<Casilla valor={valor} indiceFila={indiceFila}
						indiceColumna={indiceColumna} key={mykey} manejadorClick={this.tableroClick}/>
				)
			}, this);
			return(<div key={indiceFila}>{fila}</div>)
		}, this);
		return (<div>{tablero}</div>);
	}
});
module.exports = Tablero;
