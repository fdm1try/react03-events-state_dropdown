import classes from './DropdownItem.module.css';
import PropTypes from 'prop-types';

const DropdownItem = ({selected = false, title, onSelect}) => {

  const handlerClick = () => onSelect(title);
  return (
    <button style={{ color: `${selected ? 'blue' : 'black'}`}}
      onClick={handlerClick}
      className={classes['dropdown-list-item']}
    >
      {title}
    </button>
  )
}

DropdownItem.propTypes = {
  selected: PropTypes.bool,
  title: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}


export { DropdownItem };
