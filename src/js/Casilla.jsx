const casillaStyle ={
	height: '100`px',
	width: '100px'
};

let Casilla = React.createClass({
	render: function (){
		return(
			<button style={casillaStyle} className={this.props.valor === "-" ?
			"clickable" : "no_clickable"} onClick={this.casillaClick}>
 			{this.props.valor} </button>
		)
	}
});
module.exports = Casilla;