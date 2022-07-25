import { useState, useEffect } from "react";

import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const visibleContacts = contacts
  .filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));

  useEffect(() => {
    const KEY = "contacts"
    const savedData = localStorage.getItem(KEY) ? JSON.parse(localStorage.getItem(KEY)) : [];

    if (savedData.length > 0) {
      setContacts(savedData)
    }
  }, []);

  useEffect(() => {
    const KEY = "contacts";
    const dataToSave = JSON.stringify(contacts);

    localStorage.setItem(KEY, dataToSave)
  }, [contacts]);

    function onInputChange(e) {
      const { value } = e.target;
      setFilter(value)
    }

    function addContact(name, number) {
      if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        alert(`${name} is already in contacts`)
        return
      } else {
        setContacts(contacts => {
        return (
          [...contacts, {
            id: nanoid(),
            name: name,
            number: number,
        }])
      })
      }
    }

    function deleteContact(id) {
      setContacts(contacts => {
        const newCotnacts = contacts.filter(contact => contact.id !== id);
        return (newCotnacts)
      })
    }
  
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm addContact={addContact} />

      <h2>Contacts</h2>

      <Filter value={filter} onChange={onInputChange} />

      <ContactList contacts={visibleContacts} onClick={deleteContact} />

    </div>
  )
}