import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };
  onChange = evt => {
    const inputType = evt.target.name;
    this.setState(() => {
      return { [inputType]: evt.target.value };
    });
  };
  onSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
    form.reset();
  };
  render() {
    return (
      <div>
        <Form handleChange={this.onChange} handleSubmit={this.onSubmit} />
        <ContactsList contacts={this.state.contacts} />
      </div>
    );
  }
}
