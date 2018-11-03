import { combineReducers } from 'redux';
import BooksReducer from './books_reducer';
import ActiveBook from './reducer_active_book';


const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
