import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Diamond = ({ elephant }) => {
  console.log(elephant);
  return (
    <li className="diamond__li">
      <div className="diamond">
        <div
          className="diamond__image--background"
          style={{ backgroundImage: `url(${elephant.image})` }}
        ></div>
      </div>
      <p className="diamond__name">{elephant.name}</p>
    </li>
  );
};

Diamond.propTypes = {
  elephant: PropTypes.object.isRequired,
};

export default Diamond;
