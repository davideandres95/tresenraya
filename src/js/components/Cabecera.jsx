var React = require('react');
var ReactDOM = require('react-dom');

var Cabecera = React.createClass({
	render: function(){
		return(
			<div>
				<header className="cabecera">
					{this.props.texto}
				</header>
				<header>Movimientos X:{this.props.xMoves} - Movimientos y:{this.props.yMoves}</header>
			</div>
		)
	}
});

module.exports = Cabecera;
