import React from 'react';
import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './BookShelf';
import SearchPage from './SearchPage';

/**
* React Component to Render a BooksApp
* @author [Aron Roberts](https://github.com/robotros)
* @param {object} book - a book object
* @param {string} shelf - shelf
*/
class BooksApp extends React.Component {
  state = {
    books: [],
    screen: '',
  }

  /**
  * React Method to get book data once component mounts
  */
  componentDidMount() {
    this.getBooksOnShelf();
  }

  /**
  * Method to handle a book changing shelves
  * @param {object} book - book object to move
  * @param {string} shelf - the name of the shelf
  */
  handleChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then((response) => {
      this.getBooksOnShelf();
    });
  };

  /**
  * Method to get books and update state
  */
  getBooksOnShelf() {
    BooksAPI.getAll().then((data) => {
      this.setState({books: data});
    });
  }


  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className="app">
        <Route path='/search'
          render={()=>(
            <SearchPage
              onShelfs={this.state.books}
              onUpdateShelf={this.handleChangeShelf} />
          )}
        />
        <Route exact path='/' render={()=> (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  onUpdateShelf={this.handleChangeShelf}
                  title='Currently Reading'
                  books={this.state.books.filter((b) => b.shelf === 'currentlyReading')}
                />
                <BookShelf
                  onUpdateShelf={this.handleChangeShelf}
                  title='Want to Read'
                  books={this.state.books.filter((b) => b.shelf === 'wantToRead')}
                />
                <BookShelf
                  onUpdateShelf={this.handleChangeShelf}
                  title='Read'
                  books={this.state.books.filter((b) => b.shelf === 'read')}
                />
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' className='Add-book'>Add a book</Link>
            </div>
          </div>
        )}/>
      </div>
    );
  }
}

export default BooksApp;
