import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';

const Accordian = ({ elephant, toogleOpen }) => {
  const {
    name,
    note,
    open,
    _id,
    image,
    dob,
    dod,
    species,
    sex,
    affiliation,
  } = elephant;
  console.log(elephant);
  return (
    <div className="accordian">
      <div
        className={`accordian__header ${open ? 'accordian__header--open' : ''}`}
        onClick={() => toogleOpen(_id)}
      >
        {name}
        {open ? (
          <IoIosArrowDropup className="accordian__icon" />
        ) : (
          <IoIosArrowDropdown className="accordian__icon" />
        )}
      </div>
      <div className={`accordian__body ${open ? 'accordian__body--open' : ''}`}>
        <div className="accordian__info">
          <h2 className="accordian__name">{name}</h2>
          <h3 className="accordian__affiliation">{affiliation}</h3>
          <h4 className="accordian__species">
            {dob} - {dod} / {species} / {sex}
          </h4>
          <p className="accordian__description">{note}</p>
        </div>
        <div className="accordian__image">
          <img src={image} alt={name} />
        </div>
      </div>
    </div>
  );
};

Accordian.propTypes = {
  elephant: PropTypes.object.isRequired,
  toogleOpen: PropTypes.func.isRequired,
};

export default Accordian;
