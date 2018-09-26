import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookShelf from './BookShelf';

class SearchPage extends Component {
  state = {books:[], query:''}

  updateQuery = (event) => {
    this.setState({query: event.target.value.trim()});
    this.searchBooks(event.target.value.trim());
  }

  searchBooks = (q) => {
    BooksAPI.search(q, 20).then((results) => {
      
      let newResults= results.filter((set => r => !set.has(r.id))(new Set(this.props.onShelfs.map(b => b.id))));
      let shelfResults = this.props.onShelfs.filter((set => b => set.has(b.id))(new Set(results.map(r => r.id))));
      let resultsList = shelfResults.concat(newResults);
      
      resultsList.length > 0 ?  this.setState({books: resultsList}) : this.setState({books: []});
     //results.length > 0 ?  this.setState({books: results}) : this.setState({books: []});
    })
  }
 
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" onChange={this.updateQuery} placeholder="Search by title or author"/>
          </div>
        </div>
        <div className="search-books-results">
              <BookShelf
                onUpdateShelf={this.props.onUpdateShelf}
                title='Search Results'
                books={this.state.books}/> 
        </div>
      </div>
    )
  }
}

export default SearchPage;