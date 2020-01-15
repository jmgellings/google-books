import React, {Component} from 'react';
import SearchQuery from './searchQuery/searchQuery';
import SearchFilter from './searchFilter/searchFilter';

export default class Search extends Component {
  render() {
    return(
      <div className="Search">
        <SearchQuery query={this.props.query} handleSearch={this.props.handleSearch} />
        <SearchFilter />
      </div>
    )
  }
}