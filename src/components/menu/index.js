import React from 'react';
import { connect } from 'react-redux';
import './style.css';
import { changeList } from '../../redux/menu/actions';

const Menu = (props) => {
  const { listType, changeList } = props;
  console.log(listType);
  return (
    <div className="menu">
      <div
        className={`menu__btn ${
          listType === 'accordians' ? 'menu__btn--active' : ''
        }`}
        onClick={() => changeList('accordians')}
      >
        Lista
      </div>
      <div
        className={`menu__btn ${
          listType === 'diamonds' ? 'menu__btn--active' : ''
        }`}
        onClick={() => changeList('diamonds')}
      >
        Zdjęcia
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  listType: state.menu.listType,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeList: (type) => dispatch(changeList(type)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
