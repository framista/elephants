import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchElephants } from '../../redux/elephants/actions';
import ListDiamond from '../list-diamond';
import ListAccordian from '../list-accordian';
import './style.css';

const ElephantContainer = (props) => {
  const { fetchElephants, loading, elephants, error, listType } = props;

  useEffect(() => {
    fetchElephants();
    //eslint-disable-next-line
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  } else if (listType === 'diamonds') {
    return <ListDiamond elephants={elephants} />;
  }
  return <ListAccordian elephants={elephants} />;
};

const mapStateToProps = (state) => ({
  loading: state.elephants.loading,
  elephants: state.elephants.elephants,
  error: state.elephants.error,
  listType: state.menu.listType,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchElephants: () => dispatch(fetchElephants()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ElephantContainer);
