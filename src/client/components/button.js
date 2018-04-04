import React from 'react';
import PropTypes from 'prop-types';

class ReservationButton extends React.Component {
  constructor(props){
    super(props);
  }

  add(e){
    e.preventDefault();
    this.props.add(
        (new Date()).getTime() + 1000 * parseInt(this.props.seconds),
        this.props.label
    );
  }

  render(){
    return (
        <button className="btn btn-secondary" onClick={this.add.bind(this)}>{this.props.label}</button>
    );
  }
}

ReservationButton.propTypes = {
  add: PropTypes.func,
  seconds: PropTypes.string,
  label: PropTypes.string
};

export default ReservationButton;
