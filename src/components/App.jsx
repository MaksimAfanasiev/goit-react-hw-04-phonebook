import { Component } from "react";

import { nanoid } from 'nanoid'
import { ContactForm } from "./ContactForm/ContactForm"
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount() {
    const KEY = "contacts"
    const savedData = JSON.parse(localStorage.getItem(KEY));

    if (savedData) {
      this.setState({ contacts: savedData })
    }
  }

  componentDidUpdate(prevProps, prevStates) {
    const KEY = "contacts";
    const dataToSave = JSON.stringify(this.state.contacts);

    if (prevStates.contacts !== this.state.contacts) {
      localStorage.setItem(KEY, dataToSave);
    }
  }

  onInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    })
  }

  addContact = (name, number) => {
    this.setState(({ contacts }) => {
      if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
        alert(`${name} is already in contacts`)
        return 
      } else {
          return {
            contacts: [...contacts, {
              id: nanoid(),
              name: name,
              number: number
          }],
        }
      }
    })
  }

  deleteContact = (id) => {
    this.setState(({contacts}) => {
      const newCotnacts = contacts.filter(contact => contact.id !== id);
      return ({
        contacts: newCotnacts,
      })
    })
  }
  
  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));

    return (
      <div>
        <h1>Phonebook</h1>

        <ContactForm addContact={this.addContact} />

        <h2>Contacts</h2>

        <Filter value={filter} onChange={this.onInputChange} />

        <ContactList contacts={visibleContacts} onClick={this.deleteContact} />

      </div>
    )
  }
}
