import React from 'react';
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom';
import * as BooksAPI from "./BooksAPI";
import './App.css';

import BookShelf from './BookShelf';
import SearchPage from './SearchPage';

class BooksApp extends React.Component {
   state = {books:[],
            screen:'',}

  componentDidMount() {
    BooksAPI.getAll().then(data => {
      this.setState({books: data});
    });
  };

  handleChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      this.getBooksOnShelf();
    });
  };

  getBooksOnShelf() {
    BooksAPI.getAll().then(data => {
      this.setState({
        books: data
      });
    });
  }

  render() {
    //console.log(this.state.books);
    return (
      <div className="app">
       <Route path='/search'  render={()=>(<SearchPage onShelfs={this.state.books} onUpdateShelf={this.handleChangeShelf} />)}/>
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
                books={this.state.books.filter(b => b.shelf === 'currentlyReading')}/>
              <BookShelf
                onUpdateShelf={this.handleChangeShelf}
                title='Want to Read'
                books={this.state.books.filter(b => b.shelf === 'wantToRead')}/>
              <BookShelf
                onUpdateShelf={this.handleChangeShelf}
                title='Read'
                books={this.state.books.filter(b => b.shelf === 'read')}/>
            </div>
          </div>
          <div className="open-search">
            <Link to='/search' className='Add-book'>Add a book</Link>
          </div>
        </div>)}/>
      </div>
    )
  }
}

export default BooksApp