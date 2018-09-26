import React, {Component} from 'react';
import './App.css';

class BookShelfChanger extends Component {
  state ={value:'move'}

  componentDidMount() {
    this.setState({value: this.props.book.shelf ? this.props.book.shelf : 'none'});
  };

  onChange = (event) => {
    this.props.onUpdateShelf(this.props.book, event.target.value);
    this.setState({value: event.target.value });
     }

    render() {
          
      return (
       <div className="book-shelf-changer">
            <select id="setShelf" value={this.state.value} onChange={this.onChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
          </div>
);
      
      }
}
  
export default BookShelfChanger;