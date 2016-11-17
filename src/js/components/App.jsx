var React = require('react');
var ReactDOM = require('react-dom');

import { Button } from 'react-bootstrap';

const Cabecera = require('./Cabecera.jsx');
const Tablero = require('./Tablero.jsx');

var TresEnRayaStore = require('../stores/TresEnRayaStore');
var TresEnRayaActions = require('../actions/TresEnRayaActions');

function getAppStateFromStore(){
	return{
		turno : TresEnRayaStore.getTurno(),
		valores: TresEnRayaStore.getValores(),
		xMoves: TresEnRayaStore.getxMoves(),
		yMoves: TresEnRayaStore.getyMoves()
	};
}

var App = React.createClass({
	getInitialState: function () {
		return getAppStateFromStore();
	},
	componentDidMount(){
		TresEnRayaStore.addChangeListener(this._onChange);
	},
	componentWillUnmount(){
		TresEnRayaStore.removeChangeListener(this._onChange);
	},
	_onChange: function(){
		this.setState(getAppStateFromStore());
	},
	nuevaPartida: function(){
		TresEnRayaActions.nuevaPartida();
	},
	render: function () {
 		var texto = "Turno del " + this.state.turno;
 		return (
 			<div>
				<Cabecera texto={texto} xMoves={this.state.xMoves} yMoves={this.state.yMoves}/>
				<Tablero valores={this.state.valores}/>
				<Button bsStyle="primary" onClick={this.nuevaPartida}> Nueva Partida </Button>
			</div>
		)
	}
});
module.exports = App;
