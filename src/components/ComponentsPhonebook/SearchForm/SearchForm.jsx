import { Component } from 'react';

class SearchForm extends Component {
  render() {
    const { handleChange, value } = this.props;
    return (
      <form>
        <input
          onChange={handleChange}
          value={value}
          type="text"
          placeholder="search"
        ></input>
      </form>
    );
  }
}

export default SearchForm;
