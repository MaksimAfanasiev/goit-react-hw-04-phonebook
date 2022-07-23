import { Component } from "react";
import css from "./ContactForm.module.css";
import PropTypes from "prop-types";

export class ContactForm extends Component {

  static propTypes = {
    addContact: PropTypes.func,
  }

  state = {
      name: '',
      number: ''
  }

  onInputChange = (e) => {
      const { name, value } = e.target;
      this.setState({
      [name]: value,
      })
  }

  onFormSubmit = (e) => {
      e.preventDefault();
      
      this.props.addContact(this.state.name, this.state.number);

      this.setState({
        name: '',
        number: ''
      })
  }

  render() {
      return (
      <form className={css.contactForm} onSubmit={this.onFormSubmit}>

        <label className={css.formLabel}>
          Name
          <input className={css.formInput}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.onInputChange}
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
            value={this.state.number}
            onChange={this.onInputChange}
          />
        </label>

        <button className={css.formButton} type="submit">Add contact</button>

      </form>
      )
  }
}