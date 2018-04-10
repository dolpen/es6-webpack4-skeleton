import React from 'react';
import PropTypes from 'prop-types';
import ReservationButton from './button';

class ReservationPanel extends React.Component {
  constructor(props){
    super(props);
  }

  add(e){
    e.preventDefault();
    this.props.add(
        (new Date()).getTime() + 1000 * parseInt(this.value),
        this.textContent
    );
  }

  render(){
    const { add } = this.props;
    return (
        <div className="col-lg-6">
          <h3>登録する</h3>
          <div className="btn-group" role="group" aria-label="upto 15min">
            <ReservationButton label="1分タイマー" seconds="60" add={add}/>
            <ReservationButton label="3分タイマー" seconds="180" add={add}/>
          </div>
        </div>
    );
  }
}

ReservationPanel.propTypes = {
  add: PropTypes.func
};

export default ReservationPanel;
