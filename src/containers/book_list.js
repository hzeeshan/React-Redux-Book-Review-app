import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';

class BookList extends Component {

	renderList() {

		return (
				this.props.books.map((book) => {

					return <li key={book.title}
					 className="list-group-item list-group-item-success"
					 onClick={ () => this.props.selectBook(book) }
					 >
					 { book.title }
					 </li>

				}) 
			);
	}

	render() {

		return (

			<div>
			<ul className="list-group col-md-4">
				{ this.renderList() }

				</ul>
			</div>

			);
	}
} 

function mapStateToProps(state) {

	return { books: state.books }
}


export default connect(mapStateToProps, { selectBook })(BookList);

