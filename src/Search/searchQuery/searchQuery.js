import React, {Component} from 'react';

export default class SearchQuery extends Component {  

  constructor(props) {
    super(props);
    this.state={
      query: this.props.query
    }
  }

  queryChanged(query) {
    this.setState({
      query
    })
  }

  handleSearch(e) {
    e.preventDefault();
    const queryTerm = ((({query}) => ({query}))(this.state)).query;
    this.props.handleSearch(queryTerm);
  }

  render() {
    return(
      <form className="Search-Query" onSubmit={e => this.handleSearch(e)}>
        <label htmlFor="queryTerm">Search:</label>
        <input type="text" name="queryTerm" onChange={e => this.queryChanged(e.target.value)}></input>
        <button type="submit">Search</button>
      </form>
    )
  }
}