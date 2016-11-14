var React = require('react');
var ReactDOM = require('react-dom');

import { Button } from 'react-bootstrap';

const Cabecera = require('./Cabecera.jsx');
const Tablero = require('./Tablero.jsx');

const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";
const VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
var App = React.createClass({
	getInitialState: function () {
		return {
			turno: JUGADORX,
			valores: VALORES
		};
	},
	appClick: function (numeroFila, numeroColumna) {
		let valores = this.state.valores;
		let nuevoValor = this.state.turno === JUGADORX ? 'X': '0';
		valores [numeroFila][numeroColumna] = nuevoValor;
		this.setState({
			turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
			valores: this.state.valores
		});
	},
	newGame: function (){
		this.setState({
			turno: JUGADORX,
			valores: VALORES
		});
	},
	checkWinner:function(){
		let valores = this.state.valores;
		for(var i=0; i<3; i++){
			if((valores[i][0]!='-')&&(valores[i][0]===valores[i][1])&&(valores[i][1]===valores[i][2])){
				alert("Ha ganado el "+this.state.turno);
				break;
			}
			else if ((valores[0][i]!='-')&&(valores[0][i]===valores[1][i])&&(valores[1][i]===valores[2][i])) {
				alert("Ha ganado el "+this.state.turno);
				break;
			}
		}
		if((valores[0][0]!='-')&&(valores[0][0]===valores[1][1])&&(valores[1][1]===valores[2][2])){
			alert("Ha ganado el "+this.state.turno);
		}
		else if ((valores[0][2]!='-')&&(valores[0][2]===valores[1][1])&&(valores[1][1]===valores[2][0])) {
			alert("Ha ganado el "+this.state.turno);
		}
	},
	render: function () {
 		var texto = "Turno del " + this.state.turno;
 		return (
 			<div>
 				<Cabecera texto={texto}/>
 				<Tablero valores={this.state.valores}
 				  manejadorTableroClick ={this.appClick}
					manejadorGanador={this.checkWinner}/>
				<Button bsStyle="primary" onClick={this.newGame}> Nueva Partida </Button>
 			</div>
		)
	}
});
module.exports = App;
