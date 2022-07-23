import PropTypes from "prop-types"
import css from "./ContactListElement.module.css"

export const ContactListElement = ({ contact, deleteItem }) => {
     const { id, name, number } = contact;
    return (
        <>
            <li className={css.contactListItem}>{name}: {number}
                <button className={css.deleteBtn} type="button" onClick={() => deleteItem(id)}>Delete</button>
            </li>
        </>
    )
}

ContactListElement.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
    }),
    deleteItem: PropTypes.func,
}