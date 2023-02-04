import { Component } from 'react';

class Searchbar extends Component {
  render() {
    const { handleSubmit, value } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <input name="search"value={value} placeholder="search images" type="text"></input>
      </form>
    );
  }
}

export default Searchbar;
