import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ElephantDiamond = ({ elephant }) => {
  console.log(elephant);
  return (
    <li className="elephant-diamond__li">
      <div className="elephant-diamond">
        <div
          className="elephant-diamond__image--background"
          style={{ backgroundImage: `url(${elephant.image})` }}
        ></div>
      </div>
      <p className="elephant-diamond__name">{elephant.name}</p>
    </li>
  );
};

ElephantDiamond.propTypes = {
  elephant: PropTypes.object.isRequired,
};

export default ElephantDiamond;
