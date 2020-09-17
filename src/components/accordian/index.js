import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

const Accordian = ({ elephant, toogleOpen }) => {
  const { name, note, open, _id } = elephant;
  // console.log(elephant);
  return (
    <div className="accordian">
      <div className="accordian__header" onClick={() => toogleOpen(_id)}>
        {name}
        {open ? (
          <IoIosArrowDropup className="accordian__icon" />
        ) : (
          <IoIosArrowDropdown className="accordian__icon" />
        )}
      </div>
      <div className={`accordian__body ${open ? 'accordian__body--open' : ''}`}>
        {note}
      </div>
    </div>
  );
};

Accordian.propTypes = {
  elephant: PropTypes.object.isRequired,
  toogleOpen: PropTypes.func.isRequired,
};

export default Accordian;
