var Casilla = require("./Casilla.jsx");

var Tablero = React.createClass({
	render: function (){
		let tablero = this.props.valores.map(function (valoresFila, indiceFila){
			let fila = valoresFIla.map(function (valor, indiceColumna){
				let mykey = "" + indiceFila + indiceColumna;
				return (<Casilla valor ={valor} indiceFila={indiceFila}
						indiceColumna={indiceColumna} key={mykey} manejadorClick={this.tableroClick}/>
				)
			}, this);
			return(<div>{fila}</div>)
		}, this);
		return (<div>{tablero}</div>);
	}
});
module.exports = Tablero;