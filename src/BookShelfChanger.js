import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types';


/**
* React Component to Render a the Selector to Change a book shelf
* @author [Aron Roberts](https://github.com/robotros)
* @param {event} event
*/
class BookShelfChanger extends Component {
  state = {value: 'move'}

  componentDidMount() {
    this.setState({value: this.props.book.shelf ? this.props.book.shelf : 'none'});
  }

  onChange = (event) => {
    this.props.onUpdateShelf(this.props.book, event.target.value);
    this.setState({value: event.target.value});
  }

  /**
  * Render Component into html
  * @return {Component} html
  */
  render() {
    return (
      <div className='book-shelf-changer'>
        <select id='setShelf' value={this.state.value} onChange={this.onChange}>
          <option value='move' disabled>Move to...</option>
          <option value='currentlyReading'>Currently Reading</option>
          <option value='wantToRead'>Want to Read</option>
          <option value='read'>Read</option>
          <option value='none'>None</option>
        </select>
      </div>
    );
  }
}

BookShelfChanger.propTypes = {
  /**
  * Function to Change shelf of a book
  */
  onUpdateShelf: PropTypes.func.isRequired,
  /**
  * Current Book
  */
  book: PropTypes.object.isRequired,
};

export default BookShelfChanger;
