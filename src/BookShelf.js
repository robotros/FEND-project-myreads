import React, {Component} from 'react';
import './App.css';
import Book from './Book';
import PropTypes from 'prop-types';

/**
* React Component to Render a BookShelf
* @author [Aron Roberts](https://github.com/robotros)
*/
class BookShelf extends Component {
  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    const shelf = {
      shelfTitle: this.props.title,
      books: this.props.books,
    };

    return (
      <div className='bookshelf'>
        <h2 className='bookshelf-title'>{shelf.shelfTitle}</h2>
        <div className='bookshelf-books'>
          <ol className='books-grid'>
            {shelf.books.map((book, index) => (
              <li key={index}>
                <Book details={book} onUpdateShelf={this.props.onUpdateShelf}/>
              </li>))
            }
          </ol>
        </div>
      </div>
    );
  }
}

BookShelf.propTypes = {
  /**
  * Function to Change shelf of a book
  */
  onUpdateShelf: PropTypes.func.isRequired,
  /**
  * The title of the Book Shelf
  */
  title: PropTypes.string.isRequired,
  /**
  * Array of Books that belong on the shelf
  */
  books: PropTypes.array,
};

export default BookShelf;
