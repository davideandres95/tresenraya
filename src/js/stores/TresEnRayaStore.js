"use strict";
const EventEmitter = require('events').EventEmitter;

var TresEnRayaDispatcher = require('../dispatchers/TresEnRayaDispatcher');
var Constants = require('../constants/TresEnRayaConstants');
var turno = Constants.JUGADORX;
var valoresTablero = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
var xMoves = 0;
var yMoves = 0;

function comprobarGanador(){
	for(var i=0; i<3; i++){
		if((valoresTablero[i][0]!='-')&&(valoresTablero[i][0]===valoresTablero[i][1])&&(valoresTablero[i][1]===valoresTablero[i][2])){
			alert("Ha ganado el "+turno);
			break;
		}
		else if ((valoresTablero[0][i]!='-')&&(valoresTablero[0][i]===valoresTablero[1][i])&&(valoresTablero[1][i]===valoresTablero[2][i])) {
			alert("Ha ganado el "+turno);
			break;
		}
	}
	if((valoresTablero[0][0]!='-')&&(valoresTablero[0][0]===valoresTablero[1][1])&&(valoresTablero[1][1]===valoresTablero[2][2])){
		alert("Ha ganado el "+turno);
	}
	else if ((valoresTablero[0][2]!='-')&&(valoresTablero[0][2]===valoresTablero[1][1])&&(valoresTablero[1][1]===valores[2][0])) {
		alert("Ha ganado el "+turno);
	}
}

var TresEnRayaStore = Object.assign({}, EventEmitter.prototype, {
  getTurno: function (){
    return turno;
  },
  getValores: function (){
    return valoresTablero;
  },
  getxMoves: function (){
    return xMoves;
  },
  getyMoves: function (){
    return yMoves;
  },
  addChangeListener(callback){
    this.on(Constants.CHANGE_EVENT, callback);
  },
  removeChangeListener(callback){
    this.removeChangeListener(Constants.CHANGE_EVENT, callback);
  },
  emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  }
});
TresEnRayaDispatcher.register(function (payload) {
  switch (payload.type) {
    case Constants.ActionTypes.JUGAR_POSICION:
      let nuevoValor = turno === Constants.JUGADORX ? 'X' : '0';
      valoresTablero[payload.x][payload.y] = nuevoValor;
      if (turno === Constants.JUGADORX){
        xMoves = xMoves+1;
      }
      else{
        yMoves = yMoves+1;
      }
      comprobarGanador();
      turno = turno === Constants.JUGADORX ? Constants.JUGADOR0 : Constants.JUGADORX;
      TresEnRayaStore.emitChange();
      break;
    case Constants.ActionTypes.NUEVA_PARTIDA:
      valoresTablero = payload.valores;
      turno = payload.turno;
      xMoves = payload.xMoves;
      yMoves = payload.yMoves;
      TresEnRayaStore.emitChange();
      break;
  }
});

module.exports = TresEnRayaStore;
