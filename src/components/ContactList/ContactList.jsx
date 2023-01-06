// import { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ContactListItem } from './ContactListItem/ContactListItem';

import { ContactsList, ContactsMessage } from './ContactList.styled';

export function ContactList(props) {
  const { contacts, onContactDelete } = props;

  //   console.log(onContactDelete);

  return (
    <ContactsList>
      {contacts.length ? (
        contacts.map(contact => (
          <ContactListItem
            key={contact.id}
            contactInfo={contact}
            onContactDelete={onContactDelete}
          />
        ))
      ) : (
        <ContactsMessage>We found nothing here:(</ContactsMessage>
      )}
    </ContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onContactDelete: PropTypes.func.isRequired,
};
