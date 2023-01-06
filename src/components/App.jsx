import React, { Component } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// import { Modal } from './Modal/Modal';
// import { PropTypes } from 'prop-types';
// import { nanoid } from 'nanoid';

import { capitalizeFirstLetters } from './Utils/capitalizeFirstLetters';

import { Container, MainTitle, SecondaryTitle } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    // name: '',
    // number: '',
    // showModal: false,
  };

  checkTheSameName = inputName => {
    const normaliziedInputName = inputName.toLowerCase().trim();

    console.log(normaliziedInputName);

    return this.state.contacts.find(
      ({ name }) => name.toLowerCase() === normaliziedInputName
    );
  };

  onContactFormSubmit = ({ name, number, id }) => {
    const capitalName = capitalizeFirstLetters(name);

    if (this.checkTheSameName(name)) {
      alert(`Sorry, ${capitalName} has already added!`);
      return;
    }

    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, { name, number, id }],
      };
    });
  };

  onContactFilter = filterName => {
    this.setState({
      filter: filterName,
    });
  };

  onContactDelete = contactToDelete => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => {
          return id !== contactToDelete;
        }),
      };
    });
  };

  filterCurrentContacts = filterName => {
    const { contacts } = this.state;
    const normaliziedFilterName = filterName.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normaliziedFilterName)
    );
  };

  componentDidMount() {
    // console.log('маунт додатка');

    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      });
    }
    // console.log(contacts);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      // console.log('Оновилися контакти');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  // toggleModal = () => {
  //   // console.log('закриває');
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // };

  render() {
    const { contacts, filter } = this.state;

    // const { contacts, filter, showModal } = this.state;
    // console.log(contacts);
    // console.log(filter);

    const selectedContacts = filter
      ? this.filterCurrentContacts(filter)
      : contacts;

    return (
      <Container>
        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hello, this is content</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Exercitationem, aliquid? Sapiente nisi minima ab. Unde consequatur
              quia id nihil distinctio.
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )} */}

        <MainTitle>Phonebook</MainTitle>
        <ContactForm onFormSubmit={this.onContactFormSubmit} />

        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter onFilterInput={this.onContactFilter} value={filter} />
        <ContactList
          contacts={selectedContacts}
          onContactDelete={this.onContactDelete}
        />
      </Container>
    );
  }
}
