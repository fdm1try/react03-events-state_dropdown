import classes from './DropdownList.module.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { DropdownItem } from '../DropdownItem';

const DropdownList = ({items, open = false}) => {
  const [selectedItem, changeSelectedItem] = useState(items[0]);

  function onSelect(value) {
    const listItem = items.find((item) => item === value);
    if (listItem) {
      changeSelectedItem(listItem);
    }
  }

  return (
    <div className={`${classes['dropdown-list']} ${open ? classes['dropdown-list-open'] : ''}`}>
      <div className={`${classes['dropdown-list-items']}`}>
        {items.map((item, index) =>
          <DropdownItem key={index} selected={selectedItem === item} title={item} onSelect={onSelect} />
        )}
      </div>
    </div>
  )
}

DropdownList.propTypes = {
  open: PropTypes.bool,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}


export { DropdownList };
