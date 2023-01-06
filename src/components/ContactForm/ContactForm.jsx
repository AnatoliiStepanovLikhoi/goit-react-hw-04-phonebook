import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { nanoid } from 'nanoid';

import { Form, Label, Input, AddContactButton } from './ContactForm.styled';

export class ContactForm extends Component {
  onSubmit = event => {
    event.preventDefault();

    // console.log(event.currentTarget.elements);

    const { name: nameItem, number: numberItem } = event.currentTarget.elements;

    this.props.onFormSubmit({
      name: nameItem.value,
      number: numberItem.value,
      id: nanoid(),
    });

    event.currentTarget.reset();
  };

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            placeholder="FirstName LastName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я-яЁёІіЇїЄє]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // autoFocus
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            placeholder="123-45-67"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <AddContactButton type="submit">Add contacts</AddContactButton>
      </Form>
    );
  }
}

ContactForm.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};
