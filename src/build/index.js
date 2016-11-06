(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var JUGADORX = "jugador 1 - las X";
var JUGADOR0 = "jugador 2 - los 0";
var VALORES = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
var App = React.createClass({
	displayName: "App",

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
	render: function render() {
		var texto = "Turno del " + this.state.turno;
		return React.createElement(
			"div",
			null,
			React.createElement(Cabecera, { texto: texto }),
			React.createElement(Tablero, { valores: this.state.valores,
				manejadorTableroClick: this.appClick })
		);
	}

});
module.exports = App;

},{}],2:[function(require,module,exports){
"use strict";

var App = require("./App.jsx");
ReactDOM.render(React.createElement(App, null), document.getElementById('contenedor'));

},{"./App.jsx":1}]},{},[2]);
