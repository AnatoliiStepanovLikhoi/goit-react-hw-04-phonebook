// import React, { Component } from 'react';
import React, { useState, useEffect } from 'react';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

// import { Modal } from './Modal/Modal';
// import { PropTypes } from 'prop-types';
// import { nanoid } from 'nanoid';

import { capitalizeFirstLetters } from './Utils/capitalizeFirstLetters';

import { Container, MainTitle, SecondaryTitle } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const defaultContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));

    return parsedContacts ?? defaultContacts;
  });

  const [filter, setFilter] = useState('');
  // const [modal, setModal] = useState(false);

  const checkTheSameName = inputName => {
    const normaliziedInputName = inputName.toLowerCase().trim();
    // console.log(normaliziedInputName);

    return contacts.find(
      ({ name }) => name.toLowerCase() === normaliziedInputName
    );
  };

  const onContactFormSubmit = ({ name, number, id }) => {
    const capitalName = capitalizeFirstLetters(name);

    if (checkTheSameName(name)) {
      alert(`Sorry, ${capitalName} has already added!`);
      return;
    }

    setContacts(prevState => [...prevState, { name, number, id }]);
  };

  const onContactFilter = filterName => {
    setFilter(filterName);
  };

  const onContactDelete = contactToDelete => {
    setContacts(prevState =>
      prevState.filter(({ id }) => id !== contactToDelete)
    );

    alert(`Contact has been deleted!`);
  };

  const filterCurrentContacts = filterName => {
    const normaliziedFilterName = filterName.toLowerCase().trim();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normaliziedFilterName)
    );
  };

  // useEffect(() => {
  //   const storadeContacts = localStorage.getItem('contacts');
  //   const parsedContacts = JSON.parse(storadeContacts);

  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // toggleModal = () => {
  //   setModal(!modal)
  // };

  const selectedContacts = filter ? filterCurrentContacts(filter) : contacts;

  return (
    <Container>
      {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}

      {/* {showModal && (
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
      <ContactForm onFormSubmit={onContactFormSubmit} />

      <SecondaryTitle>Contacts</SecondaryTitle>
      <Filter onFilterInput={onContactFilter} value={filter} />
      <ContactList
        contacts={selectedContacts}
        onContactDelete={onContactDelete}
      />
    </Container>
  );
};
