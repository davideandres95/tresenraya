(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var Cabecera = require('./Cabecera.jsx');
var Tablero = require('./Tablero.jsx');

var JUGADORX = "jugador 1 - las X";
var JUGADOR0 = "jugador 2 - los 0";
var VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			turno: JUGADORX,
			valores: VALORES
		};
	},
	appClick: function appClick(numeroFila, numeroColumna) {
		var valores = this.state.valores;
		var nuevoValor = this.state.turno === JUGADORX ? 'X' : '0';
		valores[numeroFila][numeroColumna] = nuevoValor;
		this.setState({
			turno: this.state.turno === JUGADORX ? JUGADOR0 : JUGADORX,
			valores: this.state.valores
		});
	},
	checkWinner: function checkWinner() {
		var valores = this.state.valores;
		for (var i = 0; i < 3; i++) {
			if (valores[i][0] != '-' && valores[i][0] === valores[i][1] && valores[i][1] === valores[i][2]) {
				alert("Ha ganado el " + this.state.turno);
				break;
			} else if (valores[0][i] != '-' && valores[0][i] === valores[1][i] && valores[1][i] === valores[2][i]) {
				alert("Ha ganado el " + this.state.turno);
				break;
			}
		}
		if (valores[0][0] != '-' && valores[0][0] === valores[1][1] && valores[1][1] === valores[2][2]) {
			alert("Ha ganado el " + this.state.turno);
		} else if (valores[0][2] != '-' && valores[0][2] === valores[1][1] && valores[1][1] === valores[2][0]) {
			alert("Ha ganado el " + this.state.turno);
		}
	},
	render: function render() {
		var texto = "Turno del " + this.state.turno;
		return React.createElement(
			'div',
			null,
			React.createElement(Cabecera, { texto: texto }),
			React.createElement(Tablero, { valores: this.state.valores,
				manejadorTableroClick: this.appClick,
				manejadorGanador: this.checkWinner })
		);
	}
});
module.exports = App;

},{"./Cabecera.jsx":2,"./Tablero.jsx":4}],2:[function(require,module,exports){
"use strict";

var Cabecera = React.createClass({
	displayName: "Cabecera",

	render: function render() {
		return React.createElement(
			"header",
			{ className: "cabecera" },
			this.props.texto
		);
	}
});

module.exports = Cabecera;

},{}],3:[function(require,module,exports){
'use strict';

var casillaStyle = {
	height: '100px',
	width: '100px'
};

var Casilla = React.createClass({
	displayName: 'Casilla',

	casillaClick: function casillaClick() {
		if (this.props.valor === "-") {
			this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
		}
	},
	render: function render() {
		return React.createElement(
			'button',
			{ style: casillaStyle, className: this.props.valor === "-" ? "clickable" : "no_clickable", onClick: this.casillaClick },
			this.props.valor,
			' '
		);
	}
});
module.exports = Casilla;

},{}],4:[function(require,module,exports){
"use strict";

var Casilla = require("./Casilla.jsx");

var Tablero = React.createClass({
	displayName: "Tablero",

	tableroClick: function tableroClick(numeroFila, numeroColumna) {
		this.props.manejadorTableroClick(numeroFila, numeroColumna);
		this.props.manejadorGanador();
	},
	render: function render() {
		var tablero = this.props.valores.map(function (valoresFila, indiceFila) {
			var fila = valoresFila.map(function (valor, indiceColumna) {
				var mykey = "" + indiceFila + indiceColumna;
				return React.createElement(Casilla, { valor: valor, indiceFila: indiceFila,
					indiceColumna: indiceColumna, key: mykey, manejadorClick: this.tableroClick });
			}, this);
			return React.createElement(
				"div",
				null,
				fila
			);
		}, this);
		return React.createElement(
			"div",
			null,
			tablero
		);
	}
});
module.exports = Tablero;

},{"./Casilla.jsx":3}],5:[function(require,module,exports){
"use strict";

var App = require("./App.jsx");
ReactDOM.render(React.createElement(App, null), document.getElementById('contenedor'));

},{"./App.jsx":1}]},{},[5]);
