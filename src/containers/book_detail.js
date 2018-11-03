import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

	render() {

		if(!this.props.book) {

			return (

				 <h3>Click the Book to see the Details</h3>
				 
				);
		}

		return(

			<div>
				<h4> Book Details:  </h4>
				<div><strong>{ this.props.book.title }</strong> </div>
				<div> Pages: <strong>{ this.props.book.pages }</strong> </div>
			</div>

		);
	}
} 

function mapStateToProps(state) {

	return { book: state.activeBook };
}

export default connect(mapStateToProps)(BookDetail);