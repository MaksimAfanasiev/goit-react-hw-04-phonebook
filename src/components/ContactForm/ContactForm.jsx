import { useState } from "react";
import css from "./ContactForm.module.css";
import PropTypes from "prop-types";

export const ContactForm = ({addContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  function onInputChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value)
        break;
      
      case 'number':
        setNumber(value)
        break;
      
      default:
        break;
    }
  }

  function onFormSubmit(e){
    e.preventDefault();
    
    addContact(name, number);

    setName('');
    setNumber('');
  }

  return (
    <form className={css.contactForm} onSubmit={onFormSubmit}>

      <label className={css.formLabel}>
        Name
        <input className={css.formInput}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputChange}
        />
      </label>

      <label className={css.formLabel}>
        Number
        <input className={css.formInput}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onInputChange}
        />
      </label>

      <button className={css.formButton} type="submit">Add contact</button>

    </form>)
}

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
}