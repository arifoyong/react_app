import React, { Component } from 'react';
// import ReactDOM from 'react-dom';

class Counter extends Component {
	// state = {
	// 	value: this.props.counter.value,
	// };

	styles = {
		fontSize: '10px',
		fontWeight: 'bold'
	};
	

	render() {
		return ( 
			<div>
				{/*<img src={ this.state.imageUrl } alt="" />*/}
				<span><strong>{this.props.counter.id}</strong></span>
				<span style={this.styles} 
						className={this.getBadgeClasses()}> 
						{this.formatCount()}
				</span>
				<button onClick={() => this.props.onIncrement(this.props.counter)} 
					 	className="btn btn-secondary btn-sm m-2">
					 	Increment
				</button>
				{/*<button onClick={() => this.props.onIncrement(this.props.counter} 
						className="btn btn-secondary btn-sm ">
						Decrement
				</button>*/}

				<button onClick={() => this.props.onDelete(this.props.counter.id)}
						className="btn btn-danger btn-sm m-2">
						Delete
				</button>
			
			</div>
		);
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? 'zero' : value
	}

	getBadgeClasses() {
		let classes = "badge m-2 badge-";
		classes += this.props.counter.value === 0 ? "warning":"primary";

		return classes
	}

}

export default Counter;