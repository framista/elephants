import React, { Fragment, useState, useEffect } from 'react';
import Accordian from '../accordian';
import PropTypes from 'prop-types';
import {
  getAlphabeticalList,
  addOpenPropertyForItemsInContent,
} from '../../utils/elephantLogic';
import './style.css';

const ListAccordian = ({ elephants }) => {
  const [elephantsAccordian, setElephantsAccordian] = useState([]);
  useEffect(() => {
    const newElephantsArray = addOpenPropertyForItemsInContent(
      getAlphabeticalList(elephants)
    );
    setElephantsAccordian([...newElephantsArray]);
    //eslint-disable-next-line
  }, [elephants]);
  const toogleOpen = (id) => {
    setElephantsAccordian(
      elephantsAccordian.map((el) => {
        el.content.map((elephant) => {
          if (elephant._id === id) {
            elephant.open = !elephant.open;
          } else {
            elephant.open = false;
          }
          return elephant;
        });
        return el;
      })
    );
  };
  return (
    <div className="list-accordian">
      {elephantsAccordian.map((el) => {
        return (
          <Fragment key={el.letter}>
            <h3 className="list-accordian__letter">
              {el.letter.toUpperCase()}
            </h3>
            {el.content.map((elephant) => (
              <Accordian
                key={elephant._id}
                elephant={elephant}
                toogleOpen={toogleOpen}
              />
            ))}
          </Fragment>
        );
      })}
    </div>
  );
};

ListAccordian.propTypes = {
  elephants: PropTypes.array.isRequired,
};

export default ListAccordian;
