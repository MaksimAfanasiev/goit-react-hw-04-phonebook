import PropTypes from "prop-types"
import css from "./Filter.module.css";

export const Filter = ({ value, onChange }) => {
    return (
        <label className={css.filterLabel}>
          Find contacts by name
          <input className={css.filterInput} type="text" name="filter" value={value} onChange={onChange} />
        </label>
    )
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}