var TresEnRayaDispatcher = require('../dispatchers/TresEnRayaDispatcher');
var Constants = require('../constants/TresEnRayaConstants');

module.exports = {
  jugarPosicion: function(x,y) {
    TresEnRayaDispatcher.dispatch({
      type: Constants.ActionTypes.JUGAR_POSICION,
      x : x,
      y : y,
    });
  },
  nuevaPartida: function(){
    TresEnRayaDispatcher.dispatch({
      type: Constants.ActionTypes.NUEVA_PARTIDA,
      turno: Constants.JUGADORX,
			valores: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      xMoves:0,
      yMoves:0
    });
  }
};
