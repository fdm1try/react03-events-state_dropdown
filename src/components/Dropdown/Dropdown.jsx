import classes from './Dropdown.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { DropdownList } from '../DropdownList';

const Dropdown = ({title, items}) => {
  const [isVisible, changeVisibility] = useState(false);

  const handlerClick = () => changeVisibility((visibilityState) => !visibilityState);

  return (
    <div className={classes.dropdown}>
      <button className={classes['dropdown-button']} onClick={handlerClick}>
        {title}
      </button>
      <DropdownList open={isVisible} items={items} />
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}


export { Dropdown };
