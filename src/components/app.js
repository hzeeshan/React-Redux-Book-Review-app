import React, { Component } from 'react';
import BookList from '../containers/book_list';
import BookDetail from '../containers/book_detail';

export default class App extends Component {
  render() {
    return (
      <div className="app">

      		<h1> Book reviews App with React + Redux </h1>
      		<br />

      	<BookList />
      	<BookDetail />
      	
      </div>
    );
  }
}
