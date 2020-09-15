import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchElephants } from '../../redux/elephants/actions';
import ElephantDiamond from '../elephant-diamond';
import './style.css';

const ElephantContainer = ({ fetchElephants, loading, elephants, error }) => {
  useEffect(() => {
    fetchElephants();
    //eslint-disable-next-line
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  } else if (error) {
    return <div>{error}</div>;
  }
  return (
    <ul className="elephant-container">
      {elephants.map((elephant) => (
        <ElephantDiamond key={elephant._id} elephant={elephant} />
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  loading: state.loading,
  elephants: state.elephants,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchElephants: () => dispatch(fetchElephants()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ElephantContainer);
