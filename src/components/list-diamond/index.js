import React from 'react';
import Diamond from '../diamond';
import PropTypes from 'prop-types';
import './style.css';

const ListDiamond = ({ elephants }) => {
  return (
    <ul className="list-diamond">
      {elephants.map((elephant) => (
        <Diamond key={elephant._id} elephant={elephant} />
      ))}
    </ul>
  );
};

ListDiamond.propTypes = { elephants: PropTypes.array.isRequired };

export default ListDiamond;
