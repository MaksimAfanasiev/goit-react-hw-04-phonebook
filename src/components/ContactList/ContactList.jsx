import { ContactListElement } from "components/ContactListElement/ContactListElement"
import PropTypes from "prop-types"
import css from "./ContactList.module.css"


export const ContactList = ({ contacts, onClick }) => {
    return (
        <ul className={css.contactList}>
            {
                contacts.map(contact => {
                    return <ContactListElement key={contact.id} contact={contact} deleteItem={onClick}/>
                })
            }
        </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    })),
    onClick: PropTypes.func,
}